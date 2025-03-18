import { View,Text, Imagem } from 'react-native';

import styles from './styles';
import img from '../../../assets/002-1-react-native.png';


function Exemplo2 () {
    return(
        <View styles={styles.container}>
            <Text>Exemplo 2</Text>
            <Image source={img} style={styles.imagem}></Image>
        </View>
    )
}

export default Exemplo2;