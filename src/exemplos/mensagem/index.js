import { View,Text  } from 'react-native';

import styles from './styles';

function Mensagem (props) {
    return(
        <View styles={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
    )
}

export default Exemplo1;