import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/Main';
import List from './pages/List';
import About from './pages/About';
import Settings from './pages/Settings';

const routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#152c54ff',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: 'Calendário',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'Roboto',
        },
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#152c54ff',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: 'Sobre',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'Roboto',
        },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#152c54ff',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: 'Configurações',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'Roboto',
        },
      },
    },
  }),
);

export default routes;
