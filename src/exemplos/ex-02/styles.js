import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    texto: {
        height:RFPercentage(2.2),
        color: 'deepskyblue',
    },
    imagem: {
        height:RFPercentage(10),
        width:RFPercentage(28),
    },
});

export default styles;