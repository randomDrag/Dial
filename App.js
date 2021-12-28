import { createMaterialBottomTabNavigator, MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CheckCounsllers from './screen/CheckCounsllers';
import HomePage from './screen/HomePage';
import Splash from './screen/Splash';



// import IntermediateApp from ‘./IntermediateApp.js’;


  
export default function App() {
  const Tabs = createMaterialBottomTabNavigator();

  const Stack = createNativeStackNavigator();
  return (

    <Provider store={store}>
          <Splash/>

  </Provider>


    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='check'>
    //     <Stack.Screen name="check" component={CheckCounsllers} options={{ headerShown: false }} />
    //     <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
    //   </Stack.Navigator>

    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
