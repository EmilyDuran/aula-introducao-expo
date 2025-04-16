import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Index () {
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo4
            </Text>

            <Text style={styles.txtSaida}>
                Exemplo4
            </Text>

            <TextInput style={styles.txtEntrada}/>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFCDD2',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#B71C1C',
    },

txtSaida: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E53935',
},
txtEntrada: {
    borderWidth: 4,
    textAlign: 'center',
    fontSIze: 22,
    borderColor: '#B71C1C',
    height: 40,
    color: '#E53935',
    borderRadius: 10,
},
});