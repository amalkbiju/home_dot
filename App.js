import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/navigation/Index';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
export default function App() {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
}
