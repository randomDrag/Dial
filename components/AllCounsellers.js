import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import axiosBaseUrl from '../axiosBaseUrl';
import { env } from '../env';



const AllCounsellers = ({ navigation }) => {

    const [conType, setConType] = useState([])

    const [counsellorsList, setCounsollorsList] = useState([])
    const [selectedConType, setSelectedConType] = useState("");


    // console.log(“COUNSOLLORS LIST>> “, counsellorsList)



    useEffect(() => {
        axiosBaseUrl.get( "api/getPopularCounselorList", {

           
        }).then((res) => {
            console.log("All Coun", res.data)
            // setcounsellers(res.data.data)

        }).catch((err) => {
            console.log(err)
        })

        axiosBaseUrl.get( "api/geCounselorGroupByCounsellingType", {

        }).then((res) => {
            console.log(res.data.data)

            setConType(res.data.data)
            setCounsollorsList(res.data.data[0].list)
            setSelectedConType(res.data.data[0].type)

        }).catch((err) => {
            alert(err)
        })

    }, [])


    const conTypeSelector = (index) => {
        setCounsollorsList(conType[index].list)
        setSelectedConType(conType[index].type)
    }

    // console.log(">>>>>>>>>>>>>>>>>>>>> ", counsellorsList)

    const rendercounsllersType = (x) => {
        const type = x.item
        const index = x.index
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 0, marginRight: 0, padding: 10 }}>
                <TouchableOpacity style={{ backgroundColor: selectedConType == type.type ? "#be2430" : "#000", padding: 10, borderRadius: 10, marginStart: 15, borderColor: selectedConType == type.type ? "#be2430" : "#be2430" }

                }

                    onPress={() => conTypeSelector(index)}

                >
                    <Text style={{ color: "#fff", alignItems: 'center' }}>{type.type}</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const renderPopular = (y) => {
        const d1 = y.item
        return (

            <View style={{ width: 300, marginTop: 30, flexDirection: 'row', backgroundColor: "#d6d6d6", padding: 10, marginLeft: 10, marginRight: 10, borderRadius: 10, marginStart: 10, marginEnd: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0, width: "100%" }} onPress={() => navigation.navigate('AllCounsellers')}>

                    <Image
                        // source={{uri:{d1.Pimage}}}
                        style={{ width: "50%", height: 120, left: 0, padding: 0, borderRadius: 10, padding: 0, }}
                        source={env.baseUrl + d1.counselor_details?.profile_image}
                    />

                    <View style={{ flexDirection: "column", marginLeft: 10, borderWidth: 0, flex: 1 }}>

                        <Text style={{ fontSize: 18, width: '100%' }}>{d1.name}</Text>

                        <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 15, height: 15, top: 0 }}
                                source={require('../assets/tools.png')} />

                            <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.counselor_details?.counselling ? d1?.counselor_details?.counselling.name : ""}</Text>


                        </View>

                        <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 15, height: 15, top: 0 }}
                                source={require('../assets/camera.png')} />

                            <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.personalName}</Text>


                        </View>

                        <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 15, height: 15, top: 0 }}
                                source={require('../assets/feed.png')} />

                            <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.liveName}</Text>


                        </View>
                        <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 15, height: 15, top: 0 }}
                                source={require('../assets/checkmark.png')} />

                            <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.experName}</Text>


                        </View>

                        <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 10, height: 10, top: 0 }}
                                source={require('../assets/star.png')} />

                            <Text style={{ fontSize: 10, marginLeft: 5 }}>3 Star rating </Text>


                        </View>


                    </View>
                </TouchableOpacity>


            </View>

        )
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={{ borderWidth: 0 }}>

                <View >
                    <View style={{ backgroundColor: "#be2430", padding: 10 }}>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>

                                <TouchableOpacity onPress={() => navigation.navigate('HomePage1')}>
                                    <Image
                                        style={{ width: 10, height: 15, top: 0, }}
                                        source={require('../assets/back.png')} />

                                </TouchableOpacity>
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>All Councellrs</Text>

                            </View>
                            <View style={{ marginRight: 10, padding: 3 }}>

                                <Image
                                    style={{ width: 15, height: 20, top: 0, }}
                                    source={require('../assets/alarm.png')} />
                            </View>
                        </View>

                    </View>

                    <View style={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 10, alignItems: 'center' }}>

                        {/* <FlatList
                            data={counsellers}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(y) => '${y.id}'}
                            renderItem={renderPopular}
                        /> */}

                    </View>


                    <View style={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 0, }}>

                        <FlatList
                            style={{ borderWidth: 0 }}
                            data={conType}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(x) => `${x.id}`}
                            renderItem={rendercounsllersType}
                        />

                    </View>

                    <View style={{ borderWidth: 0, marginTop: 0, marginLeft: 0, marginRight: 10, alignItems: 'center' }}>

                        {counsellorsList.map((d1) => {

                            return (
                                <View style={{ width: 300, marginTop: 30, flexDirection: 'row', backgroundColor: "#d6d6d6", padding: 10, marginLeft: 10, marginRight: 10, borderRadius: 10, marginStart: 10, marginEnd: 10 }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0, width: "100%" }} onPress={() => navigation.navigate('Counsellers',{
                                                                counsellorData: d1

                                    })}>

                                        <Image
                                            // source={{uri:{d1.Pimage}}}
                                            style={{ width: "50%", height: 120, left: 0, padding: 0, borderRadius: 10, padding: 0, }}
                                            source={env.baseUrl + d1.counselor_details?.profile_image}
                                        />

                                        <View style={{ flexDirection: "column", marginLeft: 10, borderWidth: 0, flex: 1 }}>

                                            <Text style={{ fontSize: 18, width: '100%' }}>{d1.name}</Text>

                                            <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                                                <Image
                                                    style={{ width: 15, height: 15, top: 0 }}
                                                    source={require('../assets/tools.png')} />

                                                <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.counselor_details?.counselling ? d1?.counselor_details?.counselling.name : ""}</Text>


                                            </View>

                                            <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                                                <Image
                                                    style={{ width: 15, height: 15, top: 0 }}
                                                    source={require('../assets/camera.png')} />

                                                <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.personalName}</Text>


                                            </View>

                                            <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                                                <Image
                                                    style={{ width: 15, height: 15, top: 0 }}
                                                    source={require('../assets/feed.png')} />

                                                <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.liveName}</Text>


                                            </View>
                                            <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                                                <Image
                                                    style={{ width: 15, height: 15, top: 0 }}
                                                    source={require('../assets/checkmark.png')} />

                                                <Text style={{ fontSize: 10, marginLeft: 5 }}>{d1.experName}</Text>


                                            </View>

                                            <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                                                <Image
                                                    style={{ width: 10, height: 10, top: 0 }}
                                                    source={require('../assets/star.png')} />

                                                <Text style={{ fontSize: 10, marginLeft: 5 }}>3 Star rating </Text>


                                            </View>


                                        </View>
                                    </TouchableOpacity>


                                </View>

                            )
                        })}
                    </View>



                </View>
                <View style={{ height: 50 }} />

            </ScrollView>
        </SafeAreaView>

    )

}
export default AllCounsellers

const styles = StyleSheet.create({})
