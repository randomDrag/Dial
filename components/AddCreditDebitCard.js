import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddCreditDebitCard = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Container}>

                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 10, height: 15, top: 0, }}
                                    source={require('../assets/back.png')} />
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Add Credit / Debit Card</Text>

                            </View>
                        </View>

                        <View style={{ marginTop: 100, flexDirection: 'column', bottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 25, color: "#fff", fontWeight: 'bold' }}>Rs.21345678</Text>
                            <Text style={{ color: "#fff", marginTop: 10, }}>Money in your wallet </Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: "#d6d6d6", marginLeft: 10, marginRight: 10, borderRadius: 10, marginTop: -50 }}>

                        <Text style={{ marginTop: 30, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15 }}>Add Money</Text>
                        <TextInput style={{ marginRight: 20, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15, fontWeight: '700', borderColor: '#fff', backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 20 }}

                            placeholder="Enter Card Number"

                        ></TextInput>



                        <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 30 }}>


                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <Text style={{ padding: 10 }}>Expiry</Text>
                                <TextInput

                                    style={{ marginStart: 20, borderColor: "#fff", borderWidth: 1, width: 50, borderRadius: 10, alignItems: "center", backgroundColor: "#FFF", justifyContent: 'center', textAlign: 'center' }}
                                    placeholder=" MM "
                                />
                                <TextInput

                                    style={{ marginStart: 20, borderColor: "#fff", borderWidth: 1, width: 50, borderRadius: 10, alignItems: "center", backgroundColor: "#FFF", justifyContent: 'center', textAlign: 'center' }}
                                    placeholder=" YY "
                                />

                            </View>

                            <View style={{ flexDirection: 'column', marginTop: 10 }}>


                                <TextInput style={{ marginRight: 20, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15, fontWeight: '700', borderColor: '#fff', backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 20 }}

                                    placeholder="Security Code "

                                >

                                </TextInput>


                                <TextInput style={{ marginRight: 20, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15, fontWeight: '700', borderColor: '#fff', backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 20 }}

                                    placeholder="Enter First Name"

                                >

                                </TextInput>


                                <TextInput style={{ marginRight: 20, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15, fontWeight: '700', borderColor: '#fff', backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 20 }}

                                    placeholder="Enter Last Name"

                                >

                                </TextInput>


                            </View>






                        </View>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop:30 }}>

                        <TouchableOpacity style={{ width: 330, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#be2430", marginRight: 20 }}>

                            <Text style={{ color: "#fff", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddCreditDebitCard

const styles = StyleSheet.create({})
