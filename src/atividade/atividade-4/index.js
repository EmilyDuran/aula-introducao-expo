import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function CorrecaoAtv3() { 

    const [numero, setNumero] = useState(0); 

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                

          
            </View>

            <TouchableOpacity 
                style={[styles.botao, styles.botaoZerar]} 
                onPress={() => setNumero(0)}
            >
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}