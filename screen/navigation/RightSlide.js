import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Drawer } from 'react-native-paper';
import CounsllersProfile from '../../Counsllers/CounsllersProfile';

const RightSlide = () => {

    const drawer=createDrawerNavigator();
    return (
      <drawer.Navigator>
          <drawer.Screen name='Profile' component={CounsllersProfile} options={{headerShown:false}}/>
      </drawer.Navigator>
    )
}

export default RightSlide

const styles = StyleSheet.create({})
