import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
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
import BottomTabsNav, { MyChatPage, MyEnquiry, MyProfile, Wallet } from './navigation/BottomTabsNav'
import SignUp from '../Counsllers/SignUp'
import CounsllersLogin from '../Counsllers/CounsllersLogin'
import CounsllersHomePage from '../Counsllers/CounsllersHomePage'
import ChatWithUser from '../Counsllers/ChatWithUser'
import CallWithUser from '../Counsllers/CallWithUser'
import CounsllersProfile from '../Counsllers/CounsllersProfile'
import CounsllersRequestForPayment from '../Counsllers/CounsllersRequestForPayment'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './navigation/DrawerContent'
import CounsllersNotification from '../Counsllers/CounsllersNotification'
import CounsllersAboutUs from '../Counsllers/CounsllersAboutUs'
import CounsllersTermAndCondition from '../Counsllers/CounsllersTermAndCondition'
import CounsllersPrivacyPolicy from '../Counsllers/CounsllersPrivacyPolicy'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN, MODIFY_USERTYPE, selectUserToken, selectUsertype } from '../Redux/userSlice'
import CheckCounsllers from './CheckCounsllers'
import CounsllersRating from '../components/CounsllersRating'

import axiosBaseUrl from '../axiosBaseUrl'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {

    const [loading, setloading] = useState(false)

    const userType = useSelector(selectUsertype)

    const userToken = useSelector(selectUserToken)
    const userType1 = useSelector(selectUsertype)

    const dispatch = useDispatch()


    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>Token  ", userToken)
    console.log("Redux USER TYPE  ", userType1)

    const checkUser = async () => {
        try {
            const user = await AsyncStorage.getItem('userToken')
            const user_type = await AsyncStorage.getItem('userType')

            console.log("ASYNC USER TYPE  ", user_type)
            dispatch(MODIFY_USERTYPE({ userType: user_type }))

            if (user !== null) {
                // console.log("USER Exist:  ", user)
                dispatch(LOGIN({ userToken: user }))
            }

        }
        catch (err) {
            // error reading value
            console.log('Err while getting user from local storage', err)
        }
    }


    useEffect(() => {

        axiosBaseUrl.get("api/getProfile")
        .then((res) => {
            console.log("PROFILE OF USER>> ", res.data)
        }).catch((err) => {
            console.log("Err while getting profile ",err)
        })

        checkUser()

        setTimeout(() => {
            setloading(false)
        }, 2000);
    }, [])

    const temp = () => {
        axios.get("ürl")
            .then((res) => {
                console.log("RES>> ", res)
            })
            .catch((err) => console.log("ËRR"))
    }

    if (loading) {

        return (

            <ImageBackground
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
                source={require('../assets/background.png')}
            >

                <View style={styles.Container}>


                    <Image
                        style={styles.LogoImage}
                        source={require('../assets/dial.png')}

                    />

                </View>

            </ImageBackground>
        )
    }



    const Tabs = createMaterialBottomTabNavigator();

    const Stack = createNativeStackNavigator();

    const drawer = createDrawerNavigator();

    function Root() {
        return (
            <drawer.Navigator initialRouteName='CounsllersHome' drawerContent={(props) => <DrawerContent {...props} />}>
                <Stack.Screen name='counsllersLogin' component={CounsllersLogin} options={{ headerShown: false }} />
                <Stack.Screen name="CounsllersHome" component={CounsllersHomePage} options={{ headerShown: true }} />
                <Stack.Screen name="Profile" component={CounsllersProfile} options={{ headerShown: true }} />
                <Stack.Screen name="notification" component={CounsllersNotification} options={{ headerShown: false }} />
                <Stack.Screen name="about" component={CounsllersAboutUs} options={{ headerShown: false }} />
                <Stack.Screen name="privacy" component={CounsllersPrivacyPolicy} options={{ headerShown: false }} />
                <Stack.Screen name="termandcondition" component={CounsllersTermAndCondition} options={{ headerShown: false }} />
            </drawer.Navigator>
        )
    }


    if (userToken == null) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="check">
                    <Stack.Screen name="check" component={CheckCounsllers} options={{ headerShown: false }} />

                    <Stack.Screen name="counsllersLogin" component={CounsllersLogin} options={{ headerShown: false }} />
                    <Stack.Screen name="userLogin" component={Login} options={{ headerShown: false }} />

                    <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />


                </Stack.Navigator>
            </NavigationContainer>

        )
    }

    else if (userType == "customer") {
        return (
            <NavigationContainer>
                <Tabs.Navigator initialRouteName="Home"
                    activeColor="#ffffff"
                    inactiveColor="#3e2465"
                    barStyle={{ backgroundColor: '#be2430' }}>
                    <Tabs.Screen name="Home" component={BottomTabsNav} />
                    <Tabs.Screen name="Enquiry" component={MyEnquiry} />
                    <Tabs.Screen name="Wallet" component={Wallet} />
                    {/* <Tabs.Screen name="Chat" component={Chat}/> */}
                    <Tabs.Screen name="Profile" component={MyProfile} />
                </Tabs.Navigator>

                {/* </Stack.Navigator> */}

            </NavigationContainer>
        )
    }


    else if (userType == "counsellor") {
        return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName="root">
                    {/* <Stack.Screen name="Sigup" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={CounsllersLogin} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="root" component={Root} options={{ headerShown: false }} />
                    <Stack.Screen name="chatwithuser" component={ChatWithUser} options={{ headerShown: false }} />
                    <Stack.Screen name="callwithuser" component={CallWithUser} options={{ headerShown: false }} />
                    <Stack.Screen name="CounsllersProfile" component={CounsllersProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="RequestForPayment" component={CounsllersRequestForPayment} options={{ headerShown: false }} />
                    <Stack.Screen name="rating" component={CounsllersRating} options={{ headerShown: false }}/>
                </Stack.Navigator>

            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="OTP">
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Sigup" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
                    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                    <Stack.Screen name="AllCounsellers" component={AllCounsellers} options={{ headerShown: false }} />
                    <Stack.Screen name="Counsellers" component={Counsellers} options={{ headerShown: false }} />
                    <Stack.Screen name="MyWallet" component={MyWallet} options={{ headerShown: false }} />
                    <Stack.Screen name="AddWallet" component={AddCreditDebitCard} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name="Edit Profile" component={EditProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="Enquiry" component={Enquiry} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}

export default Splash

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center'
    },
    LogoImage: {
        width: 300,
        height: 180,
        justifyContent: "center",
        alignContent: 'center',
        alignItems: "center"
    }

})
