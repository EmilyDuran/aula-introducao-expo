import { View, Text, Image} from 'react-native';

import styles from './styles';

import branca from '../../../assets/camisa_branca.png'
import vermelha from '../../../assets/camiseta_vermelha.png'
import azul from '../../../assets/camiseta_azul.png'
import preta from '../../../assets/camisa_preta.png'


import Mensagem from './mensagem';

function Atividade () {
    return(
        <View style={styles.container}>
                <Mensagem titulo={'CAMISETA'} mensagem={'modelo de camiseta preta - R$39,90'} camiseta={preta}/>    
                <Mensagem titulo={'CAMISETA'} mensagem={'modelo de camiseta branca - R$39,90'} camiseta={branca}/>    
                <Mensagem titulo={'CAMISETA'} mensagem={'modelo de camiseta vermelha - R$39,90'} camiseta={vermelha}/> 
                <Mensagem titulo={'CAMISETA'} mensagem={'modelo de camiseta azul - R$39,90'} camiseta={azul}/>   
        </View>
    );
} 
export default Atividade