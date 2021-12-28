import React, { useLayoutEffect,useState,useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import { env } from '../env';
import axiosBaseUrl from '../axiosBaseUrl'


const CounsllersProfile = ({navigation}) => {

    const [Profiledata,setData]=useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])



        
        useEffect(() => {

            axiosBaseUrl.get("api/getProfile",{
              
            }).then((res)=>{
                console.log("gfmhgfdgnvgfnbfgb",res.data)
                setData(res.data)
            }).catch((err)=>{
                console.log("213r4t5y45u6i",err)
                alert("  ",err)
            })
            
        }, [])
    

    return (

      
        <SafeAreaView>
        <ScrollView>
            <View style={styles.Container}>

                <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',padding:10 }}>

                        <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('CounsllersHome')}>
                            <Image
                                style={{ width: 10, height: 15, top: 0, }}
                                source={require('../assets/back.png')} />
                                </TouchableOpacity>
                            <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Profile</Text>

                        </View>


                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, borderWidth: 1, alignSelf: "center", borderRadius: 150 }}>
                    <Image
                        style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 150 / 2, alignItems: 'center' }}
                        source={Profiledata.data?.customer_details?.profile_image}
                        />
                


                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>

                <Text style={{ fontSize: 15, fontWeight: '700', alignItems: 'center' }}> Hii {Profiledata.data?.name}</Text>

                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500',color:'#1e1e1e' }}>Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.name}</Text>


                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500',color:'#1e1e1e' }}>Email</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.email}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Mobile</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.mobile}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Qualification</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.qualification}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Fess</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.fee}</Text>
                </View>


                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Age</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.age}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Experience</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.experience}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Counselling Type</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.counselling_type}</Text>
                </View>
                
                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Counselling Payemnt</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.payment_term}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Time Availability</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.time_avalibility}</Text>
                </View>


                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Gender</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.gender}</Text>
                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Address</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{Profiledata.data?.counselor_details?.address}</Text>
                </View>

                <View style={{  height:50}}/>
                  



  


            </View>
        </ScrollView>

    </SafeAreaView>
    )
}

export default CounsllersProfile

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
