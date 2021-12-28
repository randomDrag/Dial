import axios from 'axios'
import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { env } from '../env'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { LOGIN } from '../Redux/userSlice'
import axiosBaseUrl from '../axiosBaseUrl'


const OTP = ({ navigation, route }) => {

    const {mobile} = route.params

    const [otp, setOtp] = useState('')
    const [mob, setMob] = useState('')

    const dispatch = useDispatch()

    const verifyOTP=()=>{
        axiosBaseUrl.post("api/userLoginSignUp?mobile",{
             mobile: mobile,
             otp:otp
        }, {
          
        }).then(async(res)=>{
            
            // navigation.navigate("HomePage",{
                
            // })

            dispatch(LOGIN({ userToken: res.data.data.token }))


            try {
                await AsyncStorage.setItem('userToken', res.data.data.token)
            }
            catch (err) {
                console.log('Error Ocuured While Saving: ', err)
            }


        }).catch((err)=>{
            console.log("Error : "+err)
        })
    }

    const changeOpt = (e) => {
        // console.log(e)
        let value = otp.concat(e)
        setOtp(value)
    }
    console.log(otp)
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../assets/background.png')}
            >


                <View style={{ alignItems: 'center', top: 50,  }} >
                    <Image

                        style={{
                            width: 200, height: 120, borderWidth: 0,marginBottom:10
                        }}
                        source={require('../assets/dial.png')}

                    />
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, left: 0, right: 0, textAlign: 'center' }}>We Have Sent An OTP to your mobile</Text>
                    <Text style={{ color: '#c6c6c6', fontWeight: '700', fontSize: 10, left: 0, right: 0, textAlign: 'center' }}>Please check your mobile number {mobile}  continue to reset password </Text>

                    <View style={{ flexDirection: 'row',marginTop:10 }}>

                        <View style={styles.otpBox}>
                            <TextInput
                                placeholder=""
                                onChangeText={(e) => changeOpt(e)}
                                style={{alignItems:'center',justifyContent:'center',textAlign:'center',outline: 'none'}}
                                maxLength={1}
                            />
                        </View>

                        <View style={styles.otpBox}>
                            <TextInput
                                placeholder=""
                                onChangeText={(e) => changeOpt(e)}
                                style={{textAlign:'center',outline: 'none'}}
                                maxLength={1}
                            />
                        </View>

                        <View style={styles.otpBox}>
                            
                            <TextInput
                                placeholder=""
                                onChangeText={(e) => changeOpt(e)}
                                style={{textAlign:'center',outline: 'none'}}
                                maxLength={1}
                            />
                        
                        </View>

                        <View style={styles.otpBox}>
                          
                            <TextInput
                                placeholder=""
                                onChangeText={(e) => changeOpt(e)}
                                style={{textAlign:'center',outline: 'none'}}
                                maxLength={1}
                            />
                        </View>

                    </View>


                    <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#be2430', padding: 10, borderRadius: 10 }} 
                    // onPress={() => navigation.navigate('HomePage')}
                    onPress={verifyOTP}
                    >

                        <Text style={{ color: "#fff", textAlign: 'center', }}>Next</Text>

                    </TouchableOpacity>
{/* 
                    <View style={{ flexDirection: 'row', marginTop: "50" }}>
                        <Text>dont'recive OTP ? </Text>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}> click here  </Text>
                    </View> */}

                </View>

            </ImageBackground>
        </SafeAreaView>

    )
}

export default OTP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpBox: {
        marginTop: 20,
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#d6d6d6",
        height: 45,
        width: 45,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#d6d6d6',


        // textAlign: 'center'
    },
    image: {
        width: "100%",
        height: "100%",
        // justifyContent: 'center',
        // alignItems: 'center'
    },
})
