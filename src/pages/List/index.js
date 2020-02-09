import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList, StyleSheet, Modal, AsyncStorage, View, CheckBox} from 'react-native';
import heart from '../../assets/heart.png';
import {getMonth} from 'date-fns';
import Content from '../../components/Content/index';
import months from '../../utils/months';
import capitulos from '../../utils/capitulos.json';

import {
  Container,
  Top,
  Icon,
  Title,
  Bottom,
  Alternate,
  Arr,
  ModalView,
  ModalButtom,
  TouchableView,
  ModalButtomText,
  MonthView,
  Option,
  OptionText,
  SelectAll,
  Captions,
} from './styles';

export default function List({navigation}) {
  const [dados, setDados] = useState([]);
  const [select, setSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(getMonth(new Date()));
  const [loading, setLoading] = useState(false);
  async function loadPage(mont = 0) {
    setLoading(true);
    let response = await AsyncStorage.getItem(months[mont]);
    setDados(capitulos[mont].capitulos);
    let array = response ? JSON.parse(response) : [];
    setData(array);
    array.length === capitulos[mont].capitulos.length
      ? setSelect(true)
      : setSelect(false);
    setLoading(false);
  }
  useEffect(() => {
    loadPage(month);
  }, []);
  function verify(setValue, date) {
    if (!data) {
      return;
    }
    let array = data;
    setValue(array.includes(date.dia) ? true : false);
  }

  async function saveAll(value) {
    let array = value ? dados.map(item => item.dia) : [];
    await AsyncStorage.setItem(months[month], JSON.stringify(array));
    await loadPage(month);
  }

  async function saveDay(value, date) {
    const setLido = navigation.getParam('lido');
    let array = data;
    value
      ? array.includes(date.dia)
        ? null
        : array.push(date.dia)
      : array.includes(date.dia)
      ? array.splice(array.indexOf(date.dia, 0), 1)
      : null;
    array.length === dados.length ? setSelect(true) : setSelect(false);
    setLido(date.dia, value, month);
    setData(array);
    await AsyncStorage.setItem(months[month], JSON.stringify(array));
  }

  async function handleChange(value) {
    setMonth(value);
    setModalVisible(!modalVisible);
    await loadPage(value);
  }

  function renderItem({item}) {
    return <Content data={item} saveDay={saveDay} verify={verify} />;
  }

  return (
    <Container>
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="formSheet">
        <ModalView>
          <MonthView>
            <Option
              onPress={() => {
                handleChange(0);
              }}>
              <OptionText>Janeiro</OptionText>
            </Option>
            <Option
              onPress={() => {
                handleChange(1);
              }}>
              <OptionText>Fevereiro</OptionText>
            </Option>
            <Option onPress={()=>{handleChange(2)}}><OptionText>Março</OptionText></Option>
            </MonthView>

            <MonthView>
              <Option onPress={()=>{handleChange(3)}}><OptionText>Abril</OptionText></Option>
              <Option onPress={()=>{handleChange(4)}}><OptionText>Maio</OptionText></Option>
              <Option onPress={()=>{handleChange(5)}}><OptionText>Junho</OptionText></Option>
            </MonthView>

           <MonthView>
              <Option onPress={()=>{handleChange(6)}}><OptionText>Julho</OptionText></Option>
              <Option onPress={()=>{handleChange(7)}}><OptionText>Agosto</OptionText></Option>
              <Option onPress={()=>{handleChange(8)}}><OptionText>Setembro</OptionText></Option>
            </MonthView>

            <MonthView>
              <Option onPress={()=>{handleChange(9)}}><OptionText>Outubro</OptionText></Option>
              <Option onPress={()=>{handleChange(10)}}><OptionText>Novembro</OptionText></Option>
              <Option onPress={()=>{handleChange(11)}}><OptionText>Dezembro</OptionText></Option>
            </MonthView>

            <TouchableView>
          <ModalButtom onPress={()=>{setModalVisible(!modalVisible)}} >
            <ModalButtomText>Fechar</ModalButtomText>
          </ModalButtom>
            </TouchableView>
          </ModalView>
      </Modal>
      <Top>
        <Icon source={heart} />
        <Title>{months[month].slice(0, 3)}</Title>
       
        <Arr>
        <Alternate onPress={()=>{setModalVisible(!modalVisible)}}>
          <MaterialIcons name="arrow-drop-down" style={styles.arrow}  />
        </Alternate>
        </Arr>

      </Top>
      <SelectAll>
        <CheckBox value={select} onChange={()=>{setSelect(!select)}} onValueChange={saveAll} />
        <Captions>{select?"Desmarcar todos":"Selecionar todos"}</Captions>
      </SelectAll>
      <Bottom>
{loading?
  <View /> 
: <FlatList
data={dados}
keyExtractor={item => item.dia}
renderItem ={renderItem}

/>}  

      </Bottom>
    </Container>
  );
}


const styles = StyleSheet.create({
  arrow: {
    fontSize: 28,
    color: '#fff',

  },

  mod:{
    flex:1,
    backgroundColor: '#333',
  }
  
})