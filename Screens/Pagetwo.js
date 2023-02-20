import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Separator = () => <View style={styles.separator} />;

export default function Pagetwo ({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.image2}>
            <Image source={require('../assets/solve.png')} style={{ height: 161.88, width: 213 }} />
          </View>


          <Text style={styles.text}>Hello.{'\n'}
            <Text style={styles.text1} >Welcome back!</Text>
          </Text>



          <View style={{ flex: 0, backgroundColor: '#fff', borderTopRightRadius: 40, borderTopStartRadius: 40,  }}>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Separator />
              <Text style={{ fontSize: 18, fontWeight: '450' }}>Enter to your account</Text>
            </View>
            <Text style={styles.emailText}>E-mail</Text>
            <View style={styles.wrapperInput}>
              <TextInput
                style={styles.input}
                placeholder="Email" />
            </View>

            <Text style={styles.emailText}>Password</Text>
            <View style={styles.wrapperInput}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password..." />
              <TouchableOpacity>
                <Image source={require('../assets/Vector.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 15 }}>
              <Text style={{ textDecorationLine: 'underline' }} >Forgot the password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagethree')}>
              <Text style={{ color: '#fff', padding: 10,  }}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom:50 }}>
              <Text style={{ textAlign: 'center', opacity: 0.5 }}>Don't have an account?  </Text>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Text style={{ color: '#134c3e', }} > Sign Up</Text>
              </TouchableOpacity>
            </View>


          </View>

        </ImageBackground>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    
  },
  image: {
    flex: 1,

    justifyContent: 'center',


  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#134c3e',
    marginTop: 20,
    marginBottom:20,
    flexDirection: 'row',

    justifyContent: 'center',
    margin: 15
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#134C3E',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15
  },

  input: {
    padding: 10,
    width: '85%',

  },

  emailText: {
    marginLeft: 15,
    marginTop: 20
  },

  text: {
    color: '#ff2',
    fontSize: 30,
    fontWeight: '500',
    margin: 15,
    marginTop: 10
  },
  text1: {
    color: '#fff'
  },
  image2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    opacity: 0.4,


  },

  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },

});