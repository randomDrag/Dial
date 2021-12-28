import React, { useLayoutEffect, useState, useEffect } from 'react'
import {  Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView, DrawerItem, useDrawerStatus } from '@react-navigation/drawer'
import axios from 'axios';
import { env } from '../../env';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';




const DrawerContent = ({ navigation }) => {
    const isDrawerOpen = useDrawerStatus() === 'open'


    const [Profiledata, setData] = useState("")
    const dispatch = useDispatch()


    const logoutHandler = async () => {
        try {
            await AsyncStorage.removeItem("userToken")
            await AsyncStorage.removeItem("userType")
            dispatch(logout()) // for userSlice
            // dispatch(LOGOUT_STATIC())  // for static Slice
        }
        catch (error) {
            console.log("ERROR!!", error)
        }
    }
    useEffect(() => {

        axios.get(env.baseUrl + "api/getProfile", {
            headers: {
                "Authorization":"Bearer 28|sQMBEITK5INVml4UqIXZzANmZRJy1U3r8OIUwrCL"
            }
        }).then((res) => {
            console.log("gfmhgfdgnvgfnbfgb", res.data)
            setData(res.data)
        }).catch((err) => {
            console.log("213r4t5y45u6i", err)
        })

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#be2430" }}>
            {
                isDrawerOpen ? <StatusBar barStyle="light-content" /> : <StatusBar barStyle="dark-content" />
            }
            <DrawerContentScrollView style={{ borderWidth: 0, marginTop: 10 }}>
                <View style={{
                    borderWidth: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    paddingHorizontal: 10
                }}>

                    <View style={{ marginHorizontal: 10, flex: 1, flexDirection: 'row' }}>


                        <View style={styles.CircleShape}>
                            <Image
                                source={env.imageUrl+Profiledata.data?.customer_details?.profile_image}
                                style={{ width: 20, height: 20 }}
                            />

                        </View>
                        {/* <Text style={{color: 'white', fontWeight: '700', textAlign: ‘center’ }}>Fortis Super Specialist Center</Text> */}
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16, lineHeight: 22, textAlign: 'center', marginTop: 20, marginLeft:2}}> {Profiledata?.data?.name}</Text>
                    </View>

                </View >

                <View style={{
                    borderWidth: 0,
                    borderColor: 'white',
                    marginTop: 30
                }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/user.png')}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Profile</Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity
                        onPress={() => navigation.navigate('notification')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/noti.png')}
                                style={{ width: 15, height: 20 }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Notification</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/sh.png')}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Share App</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('termandcondition')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/fil.png')}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Term & Condition </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('privacy')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/term.png')}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Privacy Policy</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('about')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/i.png')}
                                style={{ width: 8, height: 20,tintColor:"#fff" }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>About App</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity

                        // onPress={() => navigation.navigate('check')}
                        onPress={logoutHandler}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        {/* <Entypo name='home' style={{ fontSize: 21, color: '#FFFFFF', marginLeft: -1 }} /> */}
                        <View style={{  marginLeft: 10, flexDirection: 'row', padding: 0 }}>
                            <Image
                                source={require('../../assets/sig.png')}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 17, lineHeight: 22, marginLeft: 10 }}>Logout</Text>
                        </View>
                    </TouchableOpacity>



                </View>



            </DrawerContentScrollView >
        </View >
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    CircleShape: {
        width: 70,
        height: 70,
        borderRadius: 150 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
})
