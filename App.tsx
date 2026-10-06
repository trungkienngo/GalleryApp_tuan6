import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Screen01 from './commpomet/Screen01';
import Screen02 from './commpomet/Screen02';


export type RootStackParamList = {
  Screen01: undefined;
  Screen02: undefined;
  
  };


const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen01"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Screen01"
          component={Screen01}
        />

        <Stack.Screen
          name="Screen02"
          component={Screen02}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}