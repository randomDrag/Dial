import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyWallet = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Container}>

                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
                                {/* <Image
                                    style={{ width: 10, height: 15, top: 0, }}
                                    source={require('../assets/back.png')} /> */}
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>MyWallet</Text>

                            </View>
                        </View>

                        <View style={{ marginTop: 100, flexDirection: 'column', bottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 25,color:"#fff",fontWeight:'bold' }}>Rs.21345678</Text>
                            <Text style={{ color: "#fff", marginTop: 10, }}>Money in your wallet </Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: "#d6d6d6", marginLeft: 10, marginRight: 10, borderRadius: 10, marginTop: -50 }}>

                        <Text style={{ marginTop: 30, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15 }}>Add Money</Text>
                        <TextInput style={{ marginRight: 20, color: "#000", fontWeight: '700', marginLeft: 20, fontSize: 15, fontWeight: '700', borderColor: '#fff', backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 20 }}

                            placeholder="Enter Amount"

                        ></TextInput>



                        <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>


                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 100, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginStart: 10 }}>

                                    <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>300</Text>
                                </TouchableOpacity>

                            </View>


                        </View>

                    </View>

                    <View style={{ padding: 10, marginLeft: 0, marginRight: 0, }}>

                        <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>What would you like to adds finds</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>

                            <View style={{ backgroundColor: "#d6d6d6", padding: 20, borderRadius: 10, alignItems: 'center', marginStart: 0, marginEnd: 0, marginRight: 0, width: 170 }}>

                                <Image
                                    style={{ width: 100, height: 100, padding: 10 }}
                                    source={require("../assets/creditcard.png")} />

                                <Text style={{ color: '#000', marginTop: 10, fontSize: 20, fontWeight: '600' }}>Debit(*****234)</Text>

                            </View>

                            <View style={{ backgroundColor: "#d6d6d6", padding: 20, borderRadius: 10, alignItems: 'center', marginStart: 10, marginEnd: 0, width: 170 }}>

                                <Image
                                    style={{ width: 100, height: 100, padding: 10, marginTop: 10 }}
                                    source={require("../assets/cross.png")} />


                            </View>

                        </View>

                        <View style={{marginTop:20,marginRight:0}}>
                            <TouchableOpacity style={{ width: 330, marginStart: 10, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#be2430", marginRight:20}}>

                                <Text style={{ color: "#fff", marginLeft: 0, textAlign: 'center', fontSize: 15, fontWeight: '700' }}>Add Money</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default MyWallet

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})
