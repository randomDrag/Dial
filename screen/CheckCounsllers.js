import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddCreditDebitCard from '../components/AddCreditDebitCard'
import AllCounsellers from '../components/AllCounsellers'
import Counsellers from '../components/Counsellers'
import OTP from '../components/OTP'
import AboutUs from './AboutUs'
import EditProfile from './EditProfile'
import Enquiry from './Enquiry'
import HomePage from './HomePage'
import Login from './Login'
import PrivacyPolicy from './PrivacyPolicy'
import Profile from './Profile'
import TermAndCondition from './TermAndCondition'
import History from './History'
import AppointmentHistory from './AppointmentHistory'
import UserProfile from './UserProfile'
import BottomTabsNav, { MyEnquiry, MyProfile, Wallet } from './navigation/BottomTabsNav'
import { useDispatch } from 'react-redux'
import { MODIFY_USERTYPE } from '../Redux/userSlice'
import axiosBaseUrl from '../axiosBaseUrl'

import AsyncStorage from '@react-native-async-storage/async-storage'

const CheckCounsllers = ({ navigation }) => {

    const [check, setCheck] = useState("");

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
                source={require('../assets/background.png')}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', height: "100%" }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, padding: 20, left: 10, }}>

                        <Image

                            style={{
                                width: 200, height: 120, alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderWidth: 0,
                            }}
                            source={require('../assets/dial.png')}

                        />

                    </View>

                    <View style={{ marginLeft: 20, marginRight: 30, marginTop: 20, width: "100%", padding: 10 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', top: 0, color: '#fff', right: 0, left: 0, padding: 10, }}
                            onPress={async() => {
                                navigation.navigate("counsllersLogin")
                                dispatch(MODIFY_USERTYPE({userType: "counsellor"}))

                                try{
                                    await AsyncStorage.setItem('userType', 'counsellor')
                                }
                                catch (err) {
                                    console.log('Error Ocuured While Saving: ', err)
                                }
                            }}


                        >
                            <Text style={{ textAlign: 'center', top: 0, color: '#fff', backgroundColor: '#be2430', padding: 20, borderRadius: 15, fontWeight: '900', width: "100%", fontSize: 15 }}>Counsller Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 30, marginRight: 30, marginTop: 20, width: "100%", padding: 10 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', top: 0, color: '#fff', right: 0, left: 0, padding: 10, }}
                              onPress={async () => {
                                navigation.navigate("userLogin")
                                dispatch(MODIFY_USERTYPE({userType: "customer"}))

                                
                                try{
                                    await AsyncStorage.setItem('userType', 'customer')
                                }
                                catch (err) {
                                    console.log('Error Ocuured While Saving: ', err)
                                }

                            }}

                        >
                            <Text style={{ textAlign: 'center', top: 0, color: '#fff', backgroundColor: '#be2430', padding: 20, borderRadius: 15, fontWeight: '900', width: "100%", fontSize: 15 }}>User Login</Text>
                        </TouchableOpacity>
                    </View>


                    {/* <TouchableOpacity style={{ justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right', top: 0, color: '#fff', right: 0, padding: 10, }}>
               <Text style={{ textAlign: 'center', top: 10, color: '#000', right: 20, padding: 5, borderRadius: 0, fontWeight: 'bold' }}>don't have  an account ? Signup </Text>

           </TouchableOpacity> */}


                </View>
            </ImageBackground>


        </SafeAreaView>
    )
}

export default CheckCounsllers

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }

})
