import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './src/routes';
export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#152c54ff"
      />
      <Routes />
    </>
  );
}
