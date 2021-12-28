import React, { useState, useEffect } from 'react'
import CheckBox from '@react-native-community/checkbox';

import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { env } from '../env';
import { LOGIN } from '../Redux/userSlice';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import axiosBaseUrl from '../axiosBaseUrl';



const CounsllersLogin = ({ navigation }) => {

    const [email, setEmail] = useState("");

    const [password, setPAssword] = useState("");



    const dispatch = useDispatch()

    const LoginDetail = () => {


        axiosBaseUrl.post(env.baseUrl + "api/counselorLogin", {

            email: email,
            password: password
        }).then(async (res) => {

            console.log(res.data)
            dispatch(LOGIN({ userToken: res.data.data.token }))


            try {
                await AsyncStorage.setItem('userToken', res.data.data.token)
            }
            catch (err) {
                console.log('Error Ocuured While Saving: ', err)
            }

            // navigation.navigate('CounsllersHome')

        }).catch((err) => {
            console.log("Error while Loggon In", err)
            // alert(err)
        })
    }


    return (
        <SafeAreaView style={styles.conrtainer}>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center', height: "100%", marginTop: 0,
            }}>

                <ImageBackground
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                    source={require('../assets/background.png')}
                >
                    <View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, padding: 20, marginLeft: 10, width: "100%", borderWidth: 0 }}>
                            <Image
                                style={{
                                    width: 160, height: 95, alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderWidth: 0,
                                }}
                                source={require('../assets/dial.png')}/>
                        </View>

                        <Text style={{
                            marginTop: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            textAlign: 'center',
                            color: "black",
                            bottom: 10,
                            fontSize: 20,
                            fontWeight: '700',
                            borderWidth: 0
                        }}>Sign In</Text>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 30,
                            marginRight: 30,
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 10,
                            alignItems: 'center',
                            marginTop: 50,

                        }}>

                            <Image
                                style={{ width: 20, height: 25 }}
                                source={require('../assets/person.png')}
                            />

                            <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                            <TextInput
                                style={{ marginLeft: 20, width: "100%", padding: 2, outline: 'none' }}
                                onChangeText={setEmail}
                                placeholder="Enter User Name"/>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 30,
                            marginRight: 30,
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            padding: 10,
                            alignItems: 'center',
                            marginTop: 25,

                        }}>

                            <Image
                                style={{ width: 20, height: 25 }}
                                source={require('../assets/lock.png')}
                            />

                            <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                            <TextInput

                                style={{ marginLeft: 20, width: "100%", outline: 'none' }}
                                onChangeText={setPAssword}

                                placeholder="Enter Password"

                            />


                        </View>

                        <TouchableOpacity style={{ marginLeft: 20, top: 0, color: '#fff', marginRight: 20, padding: 10, borderWidth: 0, marginTop: 10 }}
                            onPress={LoginDetail}
                        >
                            <Text style={{ textAlign: 'center', top: 0, color: '#fff', right: 20, backgroundColor: '#BE2330', padding: 15, borderRadius: 15, fontWeight: 'bold' }}>Login In</Text>

                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row' }}>

                        </View>


                        {/* <Text style={{ textAlign: 'right', top: 0, color: '#000', marginRight: 30 }}> already have an account?<span style={{ color: "red", fontWeight: 'bold' }} > Sigin </span></Text> */}

                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView >
    )
}

export default CounsllersLogin

const styles = StyleSheet.create({
    conrtainer: {
        flex: 1,

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
