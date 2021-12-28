import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import { env } from '../env';
import axiosBaseUrl from '../axiosBaseUrl'

const History = ({ navigation }) => {

    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        axiosBaseUrl.get("api/getUserAppointmentList", {
           
        }).then((res) => {
            console.log(".....data ", res.data.data)
            setAppointment(res.data.data)
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
            <ScrollView>

                <View style={{ width: "100%", height: "100%" }} >
                    <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center', backgroundColor: "#be2430", padding: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyProfile1')}>
                            <Image
                                style={{ width: 10, height: 15, top: 0, }}
                                source={require('../assets/back.png')} />

                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}> Appoinment History </Text>

                    </View>

                    <View style={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, width: "100%", height: "100%" }}>
                        {appointment.map((x) => {
                            return (
                                <View style={{ backgroundColor: "#d6d6d6", padding: 10, marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 15 }}>

                                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderWidth: 0, alignSelf: "center", borderRadius: 150, flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 70, height: 70, alignItems: 'center', borderRadius: 150 / 2, alignItems: 'center', marginLeft: 0 }}
                                            // source={profile.data?.customer_details?.profile_image}
                                            source={env.baseUrl + x.counselor_details?.profile_image}
                                        />


                                        <View style={{ bottom: 10, width: "100%", marginLeft: 10 }}>
                                            <Text style={{ fontSize: 15, fontWeight: "700" }}>{x.counselor?.name}</Text>
                                            <Text style={{ fontSize: 10, fontWeight: "500" }}>{x.counselor_details?.counselling_type}</Text>
                                        </View>


                                    </View>

                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Appoinment No.</Text>
                                        <Text style={{ fontSize: 10, fontWeight: "500" }}>{x.appoint_no}</Text>

                                    </View>


                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500" }}>Chat / Voice </Text>
                                        <Text style={{ fontSize: 13, fontWeight: "700" }}>{x.type}</Text>

                                    </View>


                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500" }}>Time Duriation </Text>
                                        <Text style={{ fontSize: 13, fontWeight: "700" }}>04:00:pm - 05:00:pm</Text>

                                    </View>



                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500" }}>Date </Text>
                                        <Text style={{ fontSize: 13, fontWeight: "700" }}>{x.appointment_date}</Text>

                                    </View>

                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500" }}>Fees</Text>
                                        <Text style={{ fontSize: 13, fontWeight: "700" }}>{x.counselor_details?.fee}</Text>

                                    </View>

                                </View>
                            )
                        })}
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({
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
