import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo4() {

    const [num, setNum] = useState(0);

    function handleAtualizaState () {
        setNum(num + 1);
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
                text: 'Meu texto',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ])
    }

    return (
     <View style={styles.container}>
        <Text style={styles.titulo}>
            Exemplo envio dados clik do botão
        </Text>
        <Text style={styles.texto}>{txtExibir}</Text>
        <TouchableOpacity
                style={styles.botao}
                onPress={() => {seTxtExibir(txtInserido)}}
        >
            <Text style={styles.txtBotao}>
                Exibir texto digitado
            </Text>
        </TouchableOpacity>
     </View>
    );
}

export default Exemplo4;

