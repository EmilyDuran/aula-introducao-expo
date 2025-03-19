import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import Exemplo2 from './src/exemplos/ex-02';
import Atividade2 from

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
