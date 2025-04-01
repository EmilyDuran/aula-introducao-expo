import { View, Text, Image} from 'react-native';

import styles from './styles';

function Mensagem (props) {
    return(
      <>
        <View style={styles.container}>
            <Text>{props.titulo} {props.mensagem} </Text>
            <Image source={props.camiseta} style={styles.imagem}></Image>
        </View>
      </>
    );
} 
export default Mensagem