import {  StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'deepskyblue',
        width: '80%',
        marginBottom: 10

    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
       
    },
    imagem: {
        height: RFPercentage(10),
        width: RFPercentage(28),
        resizeMode: 'contain',
    },
   
    
});

export default styles;