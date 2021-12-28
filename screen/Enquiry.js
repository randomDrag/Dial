import axios from 'axios';
import React, { useState } from 'react'
import { SafeAreaView,FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { env } from '../env';
import axiosBaseUrl from '../axiosBaseUrl'


const Enquiry = () => {

    const[enq,setEnq]=useState();
    const[name,setName]=useState();
    const[mobile,setMobile]=useState();
    const[email,setEmail]=useState();
    const[subject,setSubject]=useState();
    const[desc,setDesc]=useState();

    const submitEnqiry=()=>{
        axiosBaseUrl.post('api/contactUs',{
            name:name,
            mobile:mobile,
            email:email,
            // subject:subject,
            descreption:desc
        }).then((res)=>{
            alert(res.data.msg)
        }).catch((err)=>{
            alert(" Some Think Went Wrong ",err)
        })

    }
   
    
 
    return (
        <SafeAreaView>
            <ScrollView>
                <View > 
                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                {/* <Image
                                    style={{ width: 10, height: 15, top: 0, }}
                                    source={require('../assets/back.png')} /> */}
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Enquiry</Text>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10, }}>Enquiry</Text>


                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10, }}
                            onChangeText={setName}
                            placeholder="Name"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10, }}
                            onChangeText={setMobile}
                            placeholder="Mobile Number"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10, }}
                            onChangeText={setEmail}
                            placeholder="Email"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10, height: 100 }}
                            onChangeText={setDesc}
                            placeholder="Descreption"
                            multiline={true}
                        />

                    </View>


                    <View style={{ alignItems: 'center', marginTop: 30 }}>

                        <TouchableOpacity onPress={submitEnqiry}>
                            <Text style={{ backgroundColor: "#be2430", padding: 10, borderRadius: 10, color: '#fff' }}>Submit Enquiry</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height:50}}/>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default Enquiry

const styles = StyleSheet.create({})
