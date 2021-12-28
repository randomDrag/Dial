import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { env } from '../env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { LOGIN } from '../Redux/userSlice'
import axiosBaseUrl from '../axiosBaseUrl'

const Login = ({ navigation }) => {

    const [isLoading, setisLoading] = useState(false)
    const [mobile, setMobile] = useState('')
    const [auth, setAuth] = useState('')

    const dispatch = useDispatch()

    if (isLoading) {
        <ActivityIndicator size="large" />
    }

    const MobileOtp = () => {

        axiosBaseUrl.post('api/userLoginSignUp?mobile', {
            mobile: mobile
        })
            .then(async (res) => {
                console.log("RES>> ", res.status)
                if (res.status === 200) {
                    
                    navigation.navigate("OTP", {
                        mobile: mobile
                    })

                    dispatch(LOGIN({ userToken: res.data.data.token }))

                }

            })
            .catch((err) => console.log("ERR"))
    }
    return (
        <SafeAreaView style={styles.conrtainer}>

            <ImageBackground
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
                source={require('../assets/background.png')}
            >
                <View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, padding: 20, left: 10, width: "100%" }}>

                        <Image

                            style={{
                                width: 200, height: 120, alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderWidth: 0,
                            }}
                            source={require('../assets/dial.png')}

                        />

                    </View>

                    <Text style={{
                        marginTop: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: "#000",
                        fontSize: 20,
                        fontWeight: '700',
                        borderWidth: 0,

                    }}>LOGIN</Text>

                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        padding: 15,
                        alignItems: 'center',
                        marginTop: 40,

                    }}>

                        <Image
                            style={{ width: 20, height: 15 }}
                            source={require('../assets/gmail.png')}
                        />

                        <View style={{ borderWidth: 0.5, height: "100%", left: 10, right: 0, backgroundColor: '#000' }} />

                        <TextInput
                            style={{ marginLeft: 20, width: "100%", outline: 'none' }}
                            onChangeText={setMobile}
                            maxLength={10}
                            placeholder="Enter Phone Number"/>


                    </View>

                    <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <TouchableOpacity style={{ justifyContent: 'flex-end', top: 0, color: '#fff', right: 0, left: 0, padding: 5, }}
                            onPress={MobileOtp}
                        // onPress={()=>navigation.navigate("OTP")}


                        >
                            <Text style={{ textAlign: 'center', top: 0, color: '#fff', backgroundColor: '#be2430', padding: 10, borderRadius: 15, fontWeight: 'bold', width: "100%", }}>Send OTP</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 0, marginLeft: 10, marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity style={{ borderRadius: 10, width: 50, height: 40, marginLeft: 20 }}>
                            {/* <Text style={{ textAlign: 'center', top: 10, color: '#fff', right: 0, backgroundColor: 'red', padding: 15, borderRadius: 15, fontWeight: 'bold' }}>Login</Text> */}
                            <Image
                                style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                source={require('../assets/fb.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ borderRadius: 10, width: 50, height: 40, marginLeft: 20 }}>
                            {/* <Text style={{ textAlign: 'center', top: 10, color: '#fff', right: 0, backgroundColor: 'red', padding: 15, borderRadius: 15, fontWeight: 'bold' }}>Login</Text> */}
                            <Image
                                style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
                                source={require('../assets/g.png')}
                            />
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

export default Login

const styles = StyleSheet.create({

    conrtainer: {
        flex: 1,
        width: "100%",
        height: "100%"

    },
    image: {
        width: "100%",
        height: "100%",
    },
    LoginCardView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        shadowRadius: 50,
        shadowOffset: {
            width: 0,
            height: 3
        },
        padding: 10,
        shadowColor: "#C1c1c1",
        top: 100,
        shadowRadius: 10,
        shadowOpacity: 3.0,
        margin: 10,
        right: 10,
        justifyContent: 'center',
        borderWidth: 1

    },
    input: {
        width: "90%",
        height: 35,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,

    },

})
