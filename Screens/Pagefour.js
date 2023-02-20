import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Pagefour () {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <Image style={{ marginTop: 100 }} source={require('../assets/background.png')} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/fgoogle.png')} />
          <Text style={styles.text}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/ffacebook.png')} />
          <Text style={styles.text}>Sign in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/ftwitter.png')} />
          <Text style={styles.text}>Sign in with Twitter</Text>
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',

  },
  touchable: {
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 10,
    // height:'7%',
    // width:'80%',
    // marginRight:8,
    // padding:8,
    // letterSpacing:1,
    justifyContent: 'center',
    marginTop: 40,
    // fontSize:18,
    fontWeight: 'bold',
    color: 'white',
    // alignContent:'center',
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: '#9298a6',
    flexDirection: 'row',
    height: 60,
    width: 270,
  },
  img: {
    height: 25,
    width: 25,
    justifyContent: 'flex-start',
    marginRight: 6

  },
  text: {
    alignItems: 'center',
    fontWeight: 'bold'
  },
});