import React, {useState, useEffect} from 'react';
import {StyleSheet, AsyncStorage, Alert} from 'react-native';
import {getMonth, getDate} from 'date-fns';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo-tudo.png';
import logo2 from '../../assets/logo-ano.png';
import capitulos from '../../utils/capitulos.json';
import months from '../../utils/months.js';
import include from '../../utils/include.js';

import {
  Container,
  Header,
  Action,
  Logo,
  Logo2,
  Top,
  Bot,
  Hello,
  Name,
  Intro,
  Verso,
  Button,
  Act,
  Option,
  Options,
} from './styles';

export default function Main({navigation}) {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [lido, setLido] = useState(false);

  useEffect(() => {
    async function loadToday() {
      let hoje = new Date();
      let today = getDate(hoje);
      today = today - 1;
      const month = getMonth(hoje);
      let tex = capitulos[month].capitulos[today];
      let response = await AsyncStorage.getItem(months[month]);
      response = JSON.parse(response);
      const inclui = include(response, tex.dia);
      setLido(inclui);
      setText(tex);
    }

    async function getName() {
      const name = await AsyncStorage.getItem('name');
      if (name == null) {
        Alert.alert(
          'Adicionar nome',
          "Vá até a página 'configurações' e adicione seu nome para um tratamento personalizado!",
        );
      } else {
        setName(name)
      }
     }   
        getName()
        loadToday();
        

    }, [])


    async function saveCaption(month, day){
        const mont = months[month]
        let array
        let response = await AsyncStorage.getItem(mont);
        const inclui = include(response, day);
        if(!inclui){
            array  =response? JSON.parse(response):[];
            array.push(day);
            await AsyncStorage.setItem(mont, JSON.stringify(array));  
        } 
        setLido(true);
    }
    async function deleteCaption(month, day){
        const mont = months[month]
        let array
        let response = await AsyncStorage.getItem(mont);
        const inclui = include(response, day);
        if(inclui){
            array  =response? JSON.parse(response):[];
            array.splice(array.indexOf(day, 0), 1);
            await AsyncStorage.setItem(mont, JSON.stringify(array));      
        } 
        setLido(false);
    }

function changeLido(day, value, month){
    if(day === text.dia && month===getMonth(new Date())){
        setLido(value)
    }
}

  return (

    <Container>
        
        <Header> 
            <Top>
            <Hello>Olá, <Name>{name}</Name></Hello>
                <Logo source={logo} />
            </Top>
           <Bot>
               <Logo2 source={logo2} />
                
           </Bot>
        </Header>
        <Action style={styles.oi} > 
            <Intro> Leitura de hoje </Intro>
            <Verso>{text.texto}</Verso>
            {lido?
            <Button 
            bgcolor='#f00'
            onPress={()=>{deleteCaption(getMonth(new Date()), text.dia)}}>
                <Act>Não Li!</Act>
            </Button>
            :<Button 
            onPress={()=>{saveCaption(getMonth(new Date()), text.dia)}}>
                <Act>Já Li!</Act>
            </Button>}

            <Options>
            <Option 
            style={styles.button}
            onPress={()=>{navigation.navigate('List', {lido: changeLido})}}>
             <MaterialIcons  name="list" style={styles.icon} />
            </Option>

            <Option 
            style={styles.button}
            onPress={()=>{navigation.navigate('Settings', {set: setName})}}>
                <MaterialIcons name="settings" style={styles.icon} />
            </Option>

            <Option 
            style={styles.button}
            onPress={()=>{navigation.navigate('About')}}>
                <MaterialIcons name="info" style={styles.icon} />
            </Option>

            
            
            </Options>
        </Action>
    </Container>
  );
}





const styles = StyleSheet.create({
    oi: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    bar: {
        backgroundColor: '#fff'
    },
    button:{
       borderWidth: 3,
       borderStyle: 'solid',
        borderColor: '#152c54ff'
    },
    icon:{
        color: '#152c54ff',
        fontSize: 42,
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },
})
