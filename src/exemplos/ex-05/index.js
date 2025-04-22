import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyConstent: 'center',
        backgroundColor: '#FF80AB',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
});

<View style={styles.container}>
    <Text style={styles.paragraph}> Exemplo 5 </Text>

    <Text style={styles.txtSaida}> Calculadora básica </Text>

    <Text style={styles.txtLabel}> 1° número </Text>
    <Text style={styles.txtEntrada} />

    <Text style={styles.txtSaida}> + </Text>

    <Text style={styles.txtLabel}> 2° número </Text>
    <Text style={styles.txtEntrada} />

    <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

    <Text style={styles.txtLabel}> Total </Text>
    <Text style={styles.txtEntrada} />

    <TouchableOpacity style={styles.button}>
        <Text style={styles.txtButton}> + </Text>
    </TouchableOpacity>
</View>