import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';


export default function Pagethree ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Image source={require('../assets/background.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 30 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Pagetwo')} >
                    <Image source={require('../assets/leftarow.png')} />

                    <Text style={{ marginTop: 0, color: '#134c3e', textAlign: 'left',fontSize:18,fontWeight:"500" }}>Back</Text>

                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity style={styles.textInput} onPress={() => navigation.navigate('Pagefour')} >
                    <Text style={styles.text}>IAM A CUSTOMER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInput1} onPress={() => navigation.navigate('Pagefour')}>
                    <Text style={styles.text}>IAM A SPECIALIZED USER</Text>
                </TouchableOpacity>






                <TouchableOpacity style={styles.continue} onPress={() => navigation.navigate('Pagefour')}>

                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>Continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height:"100%",
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
    },
    textInput: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#134c3e',
        height: '12%',
        width: '85%',
        marginRight: 8,
        padding: 8,
        letterSpacing: 1,
        justifyContent: 'center',
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#134c3e',

    },
    textInput1: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#134c3e',
        height: '12%',
        width: '85%',
        marginRight: 8,
        padding: 8,
        letterSpacing: 1,
        justifyContent: 'center',
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#134c3e',
    },
    continue: {
        shadowColor: 'grey',
        textColor: 'white',
        backgroundColor: '#134c3e',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        height: '9%',
        width: '85%',
        borderColor: 'black',
        borderWidth: 1,

    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#134c3e',
        fontWeight: 'bold',

    },

});