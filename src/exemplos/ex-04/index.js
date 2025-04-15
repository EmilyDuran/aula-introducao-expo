import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo4 () {

  const [txtInserido, setTxtInserido] = useState('');
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 4</Text>
      <Text style={styles.texto}>{txtInserido}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(valor) => setTxtInserido(valor)}
      />

      <Text style={styles.titulo}>
        Exemplo envio de dados click do botão
      </Text>
      <Text style={styles.texto}>{}</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.txtBotao}>
          Exibir texto digitado
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Exemplo4;
