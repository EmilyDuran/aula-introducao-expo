import { View, Text, Image} from 'react-native';

import styles from './styles';

import branca from '../../../assets/camisa_branca.png'
import vermelha from '../../../assets/camisa_vermelha.png'
import azul from '../../../assets/camisa_azul.png'
import preta from '../../../assets/camisa_preta.png'


import Mensagem from './mensagem';

function atividade () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Produtos</Text>
                <Image source={img} style={styles.imagem} />
                <Mensagem titulo={'CAMISETA'} mensagem={'modelo de camiseta preta'}/>    
                <Mensagem titulo={'R$39,90'} mensagem={'Em 2x no cartão'}/>    
                <Mensagem titulo={'AVISO'} mensagem={'não realizamos troca'}/>    
        </View>
    );
}