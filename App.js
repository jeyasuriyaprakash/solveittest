import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pageone from './Screens/Pageone';
import Pagetwo from './Screens/Pagetwo';
import Pagethree from './Screens/Pagethree';
import Pagefour from './Screens/Pagefour';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <GestureHandlerRootView> */}
     
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name='Pageone' component={Pageone} />
        
        <Stack.Screen name='Pagetwo' component={Pagetwo} />
        <Stack.Screen name='Pagethree' component={Pagethree} />
        <Stack.Screen name='Pagefour' component={Pagefour} />
       
        
      </Stack.Navigator>
      {/* </GestureHandlerRootView> */}
     
    </NavigationContainer>
  )
};