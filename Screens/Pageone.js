import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, PanResponder, StatusBar } from 'react-native';
import React from 'react';
import { useRef } from 'react';




export default function Pageone({ navigation }) {

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        pan.setValue({ x: 0, y: gesture.dy });
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dy < -100) {
          navigation.navigate('Pagetwo');
        } else {
          Animated.spring(pan, {
            toValue: { x: 10, y: 10 },
            friction: 10,
          }).start();
        }
      },
    })
  ).current;



  return (


    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.image2}>
          <Image source={require('../assets/solve.png')} />
        </View>

       
        <Text style={styles.text}>Swipe up
          <Text style={styles.text1} > to{'\n'}explore your{'\n'}need assistance.</Text>
        </Text>

       


        <View style={{ flex: 1, justifyContent: 'flex-end' }}>

        <Animated.View
            style={{
              transform: [{ translateY: pan.x }],
            }}
            {...panResponder.panHandlers}
          >
       
            <View style={styles.image3}>
              <Image source={require('../assets/Vector1.png')} />
            </View>
           
            <View style={{ padding: 20, backgroundColor: '#fff', borderTopRightRadius: 30, borderTopStartRadius: 30 }}>
             
              </View>
              </Animated.View>    
         
        </View>
       

      </ImageBackground>
    </View>



  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width:"100%",
    height:"100%"
  },
  image: {
    flex: 1,

    justifyContent: 'center',


  },
  text: {
    color: '#ff2',
    fontSize: 30,
    fontWeight: '500',
    margin: 15,
    marginTop:50
  },
  text1: {
    color: '#fff'
  },
  image2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    opacity: 0.6,


  },
  image3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  }

});