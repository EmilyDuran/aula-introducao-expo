import { StyleSheet } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
      fontSize: RFPercentage(3),
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: 'deepskyblue',
      color: 'deepskyblue',
      marginTop: 10,
      marginBottom: 10,
      padding: 8,
      width: '100%',
      height: 80,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 20,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    color: 'deepskyblue',
  },
  input: {
    borderWidth: RFPercentage(0.2),
    width: '100%',
    fontSize: RFPercentage(2),
    margin: RFPercentage(2),
    borderRadius: RFPercentage(2),
    borderColor: 'deepskyblue',
  },
  botao: {
    backgroundColor: 'deepskyblue',
    width: '70%',
    // height: RFPercentage(4),
    borderRadius: RFPercentage(2),
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFPercentage(1),
},
txtBotao: {
    fontSize: RFPercentage(2),
    color: '#fafafa',
    fontWeight: 'bold',
    letterSpacing: 1.5,
},
    txtSaida: {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#E91E63',
        height: 40,
        color: '#E53935',
        borderRadius: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    textButton: {
        fontSize: 22,
        color: '#FF80AB',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C511636',
    },
});

export default styles;
