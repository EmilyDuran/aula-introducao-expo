import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import Atividade2 from './src/atividade/atividade-2';
import Exemplo3 from './src/exemplos/ex-03';
 

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo3/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
