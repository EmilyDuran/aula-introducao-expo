import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

import imagem from '../../assets/react.png';

function Sobre () {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={imagem}
                resizeMode="contain"
                imageStyle={{ opacity: 0.5 }}
                style={styles.image}
            >
                <Text style={style.titulo}>Sobre</Text>
                <Text style={style.texto}>Aula de react-native com Expo</Text>
                <Text style={style.texto}>exemplos e atividades</Text>
            </ImageBackground>
        </View>
    );
}

export default Sobre;