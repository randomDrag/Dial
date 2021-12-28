import axios from 'axios';
import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { env } from '../env';
import axiosBaseUrl from '../axiosBaseUrl'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';





const Profile = ({ navigation }) => {


    const [profile, setProfile] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch()


    const getImage = () => {
        axiosBaseUrl.get( "api/getProfile", {
          
        }).then((res) => {
            console.log(res);
            setName(res.data)
        }).catch((err) => {
            console.log(err);

        })
    }

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
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Container}>

                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center', padding: 10 }}>
                                <Image
                                    style={{ width: 10, height: 15, top: 0, }}
                                    source={require('../assets/shield.png')} />
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Profile</Text>

                            </View>

                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, borderWidth: 1, alignSelf: "center", borderRadius: 150 }}>
                        <Image
                            style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 150 / 2, alignItems: 'center' }}
                            source={env.baseUrl+profile.data?.customer_details?.profile_image}
                        />
                        <View style={{ justifyContent: 'flex-end', alignItems: 'center', bottom: 10, position: "absolute", width: "60%", overflow: 'visible' }}>
                            <Image
                                style={{ width: 15, height: 15, }}
                                source={require('../assets/Group.png')} />

                        </View>


                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                            <Image
                                style={{ width: 10, height: 10, }}
                                source={require('../assets/edit.png')} />
                            <Text style={{ fontSize: 10, fontWeight: '400', alignItems: 'center', marginStart: 10 }}> Edit Profile</Text>

                        </View>

                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                        <Text style={{ fontSize: 15, fontWeight: '700', alignItems: 'center' }}> { }</Text>

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, padding: 0, }}>
                                <Image
                                    style={{ width: 20, height: 25, }}
                                    source={require('../assets/person.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: "100%" }}>Profile</Text>
                                {/* <Image
                                style={{ width: 20, height: 25, }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                    // onPress={myAppShare}
                    >

                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 20, height: 25, }}
                                    source={require('../assets/share.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}>Share App</Text>
                                {/* <Image
                                style={{ width: 20, height: 25, }}
                                source={require('../assets/person.png')} /> */}
                            </View>



                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PrivacyPolicy')}
                    // onPress={() => navigation.navigate("StaticWeb", {
                    //     name: "About Us",
                    //     apiFiller: "about/app/delivery"
                    // })}



                    >

                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 20, height: 25, }}
                                    source={require('../assets/file.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}>Privacy Policy</Text>
                                {/* <Image
                                style={{ width: 20, height: 25, }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('TermAndCondition')}>

                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 20, height: 25, }}
                                    source={require('../assets/shield.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}>Term And Condition</Text>

                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('History')}>

                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 30, height: 25, }}
                                    source={require('../assets/book.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}> Appoinment History</Text>
                                {/* <Image
                                style={{ width: 20, height: 25, }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('AppointmentHistory')}>

                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 35, height: 25, }}
                                    source={require('../assets/book.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}> Appointment Booking </Text>
                                {/* <Image
        style={{ width: 20, height: 25, }}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 30, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 8, height: 20, padding: 0 }}
                                    source={require('../assets/i.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}>About Us</Text>

                                {/* <Image
                                style={{ width: 20, height: 25, }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}

                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={logoutHandler}>
                        <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>


                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginLeft: 20, marginRight: 20, padding: 0 }}>
                                <Image
                                    style={{ width: 20, height: 25, }}
                                    source={require('../assets/logout.png')} />

                                <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', width: '100%' }}>Sign Out</Text>
                                {/* <Image
        style={{ width: 20, height: 25, }}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/81/81068.png' }} /> */}
                            </View>



                        </View>

                    </TouchableOpacity>


                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({

    Container: {
        flex: 1
    },
    CircleShape: {
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        backgroundColor: '#be2430',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
