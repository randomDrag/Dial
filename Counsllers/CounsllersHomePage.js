import { NavigationContainer } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, AsyncStorage, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerActions } from '@react-navigation/native';
import { env } from '../env'
import moment from 'moment';
import { LOGIN, selectUserToken } from '../Redux/userSlice'
import { useSelector } from 'react-redux'
import axiosBaseUrl from '../axiosBaseUrl'


const CounsllersHomePage = ({ navigation }) => {

    const [Profiledata, setData] = useState("")
    // const greeting="";    
    //  const dispatch = useDispatch();




    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    // const dateTime = moment().format('HH');
    // if (dateTime >= 4 && dateTime < 12) {
    //   greeting = 'Morning';
    // } else if (dateTime >= 12 && dateTime < 16) {
    //   greeting = 'Afternoon';
    // } else {
    //   greeting = 'Evening';
    // }

    useEffect(() => {

        axiosBaseUrl.get( "api/getProfile", {
           
        }).then((res) => {
            console.log("gfmhgfdgnvgfnbfgb", res.data)
            setData(res.data)
        }).catch((err) => {
            console.log("213r4t5y45u6i", err)
        })

    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ borderWidth: 0, height: "100%", showsHorizontalScrollIndicator: false }}>


                <View style={{ backgroundColor: "#be2430", borderWidth: 0, height: 170 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TouchableOpacity
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            style={{ marginTop: 10, marginLeft: 10 }}
                        >
                            <Image
                                source={require('../assets/menu.png')}
                                style={{ width: 25, height: 15 }}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate('notification')}>


                            <View style={{ marginRight: 10, padding: 3 }}>

                                <Image
                                    style={{ width: 15, height: 20, top: 5, }}
                                    source={require('../assets/alarm.png')} />
                            </View>

                        </TouchableOpacity>

                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ flexDirection: 'column', marginTop: 10 }}>

                            <Text style={{ color: "#c6c6c6", fontSize: 10, fontWeight: "500", left: 10, marginLeft: 20 }}>Good </Text>
                            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 20 }}>{Profiledata.data?.name}</Text>

                        </View>

                    </View>


                </View>

                <View style={{
                    borderWidth: 0, marginTop: -60
                }}>

                    <TouchableOpacity onPress={() => navigation.navigate('chatwithuser')}>
                        <View style={{ backgroundColor: "#d6d6d6", borderRadius: 15, padding: 20, flexDirection: 'row', position: "äbsolute", marginHorizontal: 20, marginTop: 10 }}>


                            <Image
                                style={{ width: 57, height: 50, left: 10, top: 0, bottom: 0, padding: 10 }}
                                source={require('../assets/bubble.png')}
                            />

                            <Text style={{ textAlign: 'center', width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: 0, alignContent: 'center', color: '#5B5B5B', fontWeight: '700' }}>Chat with user</Text>
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('callwithuser')}>

                        <View style={{ backgroundColor: "#d6d6d6", borderRadius: 15, padding: 20, flexDirection: 'row', position: "äbsolute", marginHorizontal: 20, marginTop: 10, borderWidth: 0 }}>
                            <Image
                                style={{ width: 57, height: 57, left: 10, top: 0, bottom: 0, padding: 10 }}
                                source={require('../assets/callWithUser.png')}
                            />

                            <Text style={{ textAlign: 'center', width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: 0, alignContent: 'center', color: '#5B5B5B', fontWeight: '700' }}>Calls with user </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("rating")}>
                        <View style={{ backgroundColor: "#d6d6d6", borderRadius: 15, padding: 20, flexDirection: 'row', position: "äbsolute", marginHorizontal: 20, marginTop: 10 }}>


                            <Image
                                style={{ width: 57, height: 50, left: 10, top: 0, bottom: 0, padding: 10 }}
                                source={require('../assets/rating.png')}
                            />

                            <Text style={{ textAlign: 'center', width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: 0, alignContent: 'center', color: '#5B5B5B', fontWeight: '700' }}>Review & Rating </Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => navigation.navigate('RequestForPayment')}>



                        <View style={{ backgroundColor: "#d6d6d6", borderRadius: 15, padding: 20, flexDirection: 'row', position: "äbsolute", marginHorizontal: 20, marginTop: 10 }}>


                            <Image
                                style={{ width: 57, height: 50, left: 10, top: 0, bottom: 0, padding: 10 }}
                                source={require('../assets/requestForMoney.png')}
                            />

                            <Text style={{ textAlign: 'center', width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: 0, alignContent: 'center', color: '#5B5B5B', fontWeight: '700' }}>Request for payments </Text>
                        </View>

                    </TouchableOpacity>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default CounsllersHomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 0,

    }

})
