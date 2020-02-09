import React, {useState, useEffect} from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  getTime,
  parseJSON,
  getMinutes,
  getHours,
  differenceInMilliseconds,
} from 'date-fns';
import Notifications from 'react-native-push-notification';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  Container,
  NameContainer,
  IconView,
  ContentView,
  EditView,
  Title,
  TextContent,
  EditButton,
  TextEdit,
} from './styles';

export default function Settings({navigation}) {
  const [activeName, setActiveName] = useState(false);
  const [activePicker, setActivePicker] = useState(false);
  const [name, setName] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    async function getName() {
      const user = await AsyncStorage.getItem('name');
      setName(user);
      let dia = await AsyncStorage.getItem('day');
      const todia = parseInt(dia);
      setDay(todia);
    }
    getName();
  }, []);

  function saveData(time) {
    const localNotification = {
      title: 'Ano Bíblico Jovem 2020',
      message: 'Está na hora da leitura do seu ano bíblico!',
      repeatType: 'day',
      date: new Date(time),
    };
    console.log(new Date(time));
    Notifications.localNotificationSchedule(localNotification);
  }

  async function onSave() {
    setActiveName(!activeName);
    await AsyncStorage.setItem('name', name);
    const set = navigation.getParam('set');
    set(name);
  }

  function formatDate(date) {
    let hora = getHours(date);
    let minuto = getMinutes(date);
    let temp = '' + (hora < 10 ? '0' : '') + hora;
    temp += (minuto < 10 ? ':0' : ':') + minuto;
    return temp;
  }

  async function changeDate(event, date) {
    setActivePicker(false);
    if (date !== undefined) {
      Notifications.cancelAllLocalNotifications();
      const toDate = getTime(new Date());
      const milli = differenceInMilliseconds(date, toDate);
      let newDay;
      if (milli > 0) {
        newDay = toDate + milli;
      } else {
        newDay = toDate + 86400000 + milli;
      }
      console.log(toDate, newDay, milli);
      saveData(newDay);
      await AsyncStorage.setItem('day', newDay.toString());
      setDay(parseJSON(newDay));
    }
  }

  return (
    <Container>
      <NameContainer>
        <IconView>
          <MaterialIcons name="person" style={style.nameIcon} />
        </IconView>
        <ContentView>
          <Title>Nome</Title>
          {activeName ? (
            <TextEdit
              onSubmitEditing={onSave}
              value={name}
              maxLength={16}
              onChangeText={setName}
            />
          ) : (
            <TextContent>{name ? name : 'Usuário'}</TextContent>
          )}
        </ContentView>

        <EditView>
          <EditButton
            onPress={() => {
              setActiveName(!activeName);
            }}>
            {activeName ? (
              <IconView>
                <MaterialIcons name="cancel" style={style.cancelIcon} />
              </IconView>
            ) : (
              <IconView>
                <MaterialIcons name="edit" style={style.editIcon} />
              </IconView>
            )}
          </EditButton>
        </EditView>
      </NameContainer>

      <NameContainer>
        <IconView>
          <MaterialIcons name="notifications" style={style.notificationIcon} />
        </IconView>

        <ContentView>
          <Title>Notificações</Title>
          {activePicker ? (
            <RNDateTimePicker
              is24Hour={true}
              mode="time"
              timeZoneOffsetInMinutes={0}
              value={new Date()}
              locale={'pt-BR'}
              onChange={(event, date) => {
                changeDate(event, date);
              }}
            />
          ) : (
            <TextContent>
              {day ? formatDate(day) : 'Selecione um horário'}
            </TextContent>
          )}
        </ContentView>

        <EditView>
          <EditButton
            onPress={() => {
              setActivePicker(true);
            }}>
            <IconView>
              <MaterialIcons name="edit" style={style.editIcon} />
            </IconView>
          </EditButton>
        </EditView>
      </NameContainer>
    </Container>
  );
}

const style = StyleSheet.create({
  nameIcon: {
    color: '#152c54ff',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cancelIcon: {
    color: '#f00',
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  editIcon: {
    color: '#999',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  notificationIcon: {
    color: '#152c54ff',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
