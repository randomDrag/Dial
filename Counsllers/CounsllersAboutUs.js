import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'
import { env } from '../env'

const CounsllersAboutUs = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: "#BE2330", flexDirection: 'row', padding: 10 }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('CounsllersHome') }}>
                            <Image
                                style={{ width: 10, height: 15, top: 10, padding: 10 }}
                                source={require('../assets/back.png')} />
                        </TouchableOpacity>

                        <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10, padding: 10 }}>About Us</Text>

                    </View>

                    
                <View style={{width:"100%",height:"100%",borderWidth:0}}>
                 <WebView
                   style={{borderWidth:0}}
                    // source={{ uri:env.webUrl+"about/app/user" }} /> 
                    source={{uri:env.webUrl+"api/counselorAppAbout" }} /> 


            </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CounsllersAboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
