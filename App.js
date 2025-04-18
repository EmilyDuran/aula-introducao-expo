import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import Atividade2 from './src/atividade/atividade-2';
import Exemplo3 from './src/exemplos/ex-03';
import Atividade4 from './src/atividade/atividade-4';
import Exemplo4 from './src/exemplos/ex-04'
 
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import Index from './src/atividade/atividade-4';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B71C1C',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    // marginTop: Constants.statusBarHeight || 8,
  },
});
