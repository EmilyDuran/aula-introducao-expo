import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade3() {

    const [num, setNum] = useState(0);

    function handleAtualizaState () {
        setNum(num + 1);
    }

    function handleAtuaState () {
        setNum(num - 1);
    }

    function handleAtualiState () {
        setNum(0);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade3</Text>

            <View style={styles.grupo}>

            <TouchableOpacity style={styles.botao} onPress={handleAtualizaState}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            <Text style={styles.numero}>{num}</Text> 

            <TouchableOpacity style={styles.botao} onPress={handleAtuaState}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
      </View>

           
          
            <TouchableOpacity style={styles.botao} onPress={handleAtualiState}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>


        </View>
    );
}

export default Atividade3;

