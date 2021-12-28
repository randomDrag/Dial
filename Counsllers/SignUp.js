import React from 'react'
import CheckBox from '@react-native-community/checkbox';

import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const SignUp = () => {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const LoginMobileNumber = () => {
        axios.post("https://f16e-122-160-47-222.ngrok.io//api/userLoginSignUp", {
            mobile: 8571056426
        })
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <SafeAreaView style={styles.conrtainer}>

            <ImageBackground
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
                source={require('../assets/background.png')}
            >
                <View>



                <View style={{justifyContent:'center',alignItems:'center',marginTop:30,padding:20,left:10,width:"100%"}}>
               

               <Image

                      style={{
                          width: 100, height: 60, alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderWidth: 0,
                      }}
                      source={require('../assets/dial.png')}

                  />

                  </View>

                <Text style={{
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                textAlign: 'center',
                color: "black",
                bottom: 10,
                fontSize: 20,
                fontWeight: '700',
                borderWidth: 0
            }}>Sign Up</Text>

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
                style={{ width: 20, height: 15 }}
                source={require('../assets/gmail.png')}
                />

                <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                <TextInput

                style={{ marginLeft: 20, width: "100%", padding: 2 }}

                placeholder="Enter User Name"

                />


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
                style={{ width: 20, height: 15 }}
                source={require('../assets/gmail.png')}
                />

                <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                <TextInput

                style={{ marginLeft: 20, width: "100%", padding: 2 }}

                placeholder="Enter User Name"

                />


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
                style={{ width: 20, height: 15 }}
                source={require('../assets/gmail.png')}
                />

                <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                <TextInput

                style={{ marginLeft: 20, width: "100%", padding: 2 }}

                placeholder="Enter User Name"

                />


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
                style={{ width: 20, height: 15 }}
                source={require('../assets/gmail.png')}
                />

                <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                <TextInput

                style={{ marginLeft: 20, width: "100%", padding: 2 }}

                placeholder="Enter User Name"

                />


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
                style={{ width: 20, height: 15 }}
                source={require('../assets/gmail.png')}
                />

                <View style={{ borderWidth: 1, height: "100%", left: 10, right: 10 }} />

                <TextInput

                style={{ marginLeft: 20, width: "100%", padding: 2 }}

                placeholder="Enter User Name"

                />


                </View>




                <View style={{
                flexDirection: 'row',
                marginLeft: 60,

                marginTop: 10
            }}>
            {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /> */}

                <Text style={{ textAlign: 'right', top: 10, color: '#000', right: 30, marginLeft: 10 }}>If you are counseller please check </Text>



                </View>


                <TouchableOpacity style={{ justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end', textAlign: 'right', top: 0, color: '#fff', right: 20, padding: 10, }

            }>
                <Text style={{ textAlign: 'center', top: 0, color: '#fff', right: 20, backgroundColor: 'red', padding: 15, borderRadius: 15, fontWeight: 'bold' }}>Sign Up</Text>

                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>

                </View>


                <Text style={{ textAlign: 'right', top: 0, color: '#000', marginRight: 30 }}> already have an account?<span style={{ color: "red", fontWeight: 'bold' }} > Sigin </span></Text>

                </View>

            </ImageBackground>
        </SafeAreaView >
    )
}

export default SignUp


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
