import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosBaseUrl from '../axiosBaseUrl'
import { env } from '../env'
const UserProfile = ({navigation}) => {
    const[profileState,setProfileState]=useState([])

    useEffect(() => {
        axiosBaseUrl.get("api/getProfile",{
              
        }).then((res)=>{
            console.log("Profile",res)
            setProfileState(res.data)
        }).catch((err)=>{
            console.log("Error",err)
        })
      
    }, []);
    return (
        <SafeAreaView>
        <ScrollView>
            <View style={styles.Container}>

                <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('MyProfile1')}>
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
                        source={profileState.data?.customer_details?.profile_image}
                    />
                    {/* <View style={{ justifyContent: 'flex-end', alignItems: 'center', bottom: 10, position: "absolute", width: "60%", overflow: 'visible' }}>
                        <Image
                            style={{ width: 15, height: 15, }}
                            source={require('../assets/Group.png')} />

                    </View> */}


                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>

                    <Text style={{ fontSize: 15, fontWeight: '700', alignItems: 'center' }}> Hii {profileState.data?.name}</Text>

                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500',color:'#1e1e1e' }}>Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{profileState.data?.name}</Text>


                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500',color:'#1e1e1e' }}>Email</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{profileState.data?.email}</Text>


                </View>

                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500' , color:'#1e1e1e'}}>Mobile</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{profileState.data?.mobile}</Text>


                </View>

                {/* <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '500',color:'#1e1e1e' }}>Address</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>Delhi , India </Text>


                </View> */}

                {/* <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '700' }}>Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>Shubham Chuhan</Text>


                </View>


                <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: '700' }}>Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>Shubham Chuhan</Text>


                </View> */}





            </View>
        </ScrollView>

    </SafeAreaView>
    )
}

export default UserProfile

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
},})
