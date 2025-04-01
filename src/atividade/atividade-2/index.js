import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../../assets/camisa_branca.png';
import img2 from '../../../assets/camisa_preta.png';
import img3 from '../../../assets/camiseta_azul.png';
import img4 from '../../../assets/camiseta_vermelha.png';


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'Camisa Polo Branca'} img={img1} valor={'350,00'}>Camisa modelo clássico.</Card>
            <Card titulo={'Camisa Polo Preta'} img={img2} valor={'380,00'}>Camisa modelo clássico.</Card>
            <Card titulo={'Camisa Azul Lisa'} img={img3} valor={'150,00'}>Camisa cleção verão 2021.</Card>
            <Card titulo={'Camisa Vermelha Lisa'} img={img4} valor={'180,00'}>Camisa Summer Pack.</Card>
        </View>
    );
}

export default Atividade2;

