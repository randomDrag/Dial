import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosBaseUrl from '../axiosBaseUrl';
import { env } from '../env';


const CounsllersRequestForPayment = ({navigation}) => {

    const[payment,setPayment]=useState("");
    const[accountNo,setAccountNo]=useState("");
    const[bankName,setBankName]=useState("");
    const[accountName,setAccountName]=useState("");
    const[ifscCode,setIfsCode]=useState("");
    const[branchName,setBranchName]=useState("");
    const[branchCode,setBranchCode]=useState("");


    const AccountDetails=()=>{

      
            axiosBaseUrl.post("api/updateAccountDetails",{

                account_no:accountNo,
                bank_name:bankName,
                account_name:accountName,
                ifsc_code:ifscCode,
                branch_name:branchName,
                branch_code:branchCode,
             
            }, 
            )      

        
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center', padding: 10 }}>
                                <TouchableOpacity onPress={()=>navigation.navigate('CounsllersHome')}>
                                    <Image
                                        style={{ width: 10, height: 15, top: 0, }}
                                        source={require('../assets/back.png')} />
                                </TouchableOpacity>

                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 20 }}>Request For Payments</Text>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 10, }}>Please fill your bank details</Text>


                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10,padding:10 }}>
                        <TextInput
                            style={{ padding: 10, outline: 'none' }}
                            onChangeText={setBankName}
                            placeholder="Bank Name"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10,padding:10 }}>
                        <TextInput
                            style={{ padding: 10,  outline: 'none'}}
                            onChangeText={setAccountName}
                            placeholder="Name"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6",padding:10, marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10,padding:10 }}>
                        <TextInput
                            style={{ padding: 10,  outline: 'none'}}
                            onChangeText={setAccountNo}
                            placeholder="Account  Number"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10,padding:10 }}>
                        <TextInput
                            style={{ padding: 10, outline: 'none' }}
                            onChangeText={setIfsCode}
                            placeholder="IFSC Code"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", padding:10,marginTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10 , outline: 'none'}}
                            onChangeText={setBranchName}
                            placeholder="Brench Name"
                        />

                    </View>

                    <View style={{ backgroundColor: "#d6d6d6", marginTop: 20, marginLeft: 10, marginRight: 10,padding:10, borderRadius: 10 }}>
                        <TextInput
                            style={{ padding: 10, outline: 'none' }}
                            onChangeText={setBranchCode}
                            placeholder="Brench Code"
                        />

                    </View>


                    <View style={{ alignItems: 'center', marginTop: 30 }}>

                        <TouchableOpacity onPress={AccountDetails}>
                            <Text style={{ backgroundColor: "#be2430", padding: 10, borderRadius: 10, color: '#fff' }}>Submit Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default CounsllersRequestForPayment

const styles = StyleSheet.create({})
