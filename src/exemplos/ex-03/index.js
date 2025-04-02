import { View, Text, Button, Alert } from 'react-native';

import styles from './styles';

function Exemplo3() {  

    function handleExibeMensagem () {
        Alert.alert('Teste')
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
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis vs State</Text>
            <Button
                onPress={handleOutroJeitoFuncao}
                title="Alerta"
                color="deepskyblue"
                accessibilityLabel="Mensagem de alerta"                  
            />
        </View>
    );
}

export default Exemplo3;

