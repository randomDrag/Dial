import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { env } from '../env';
import { WebView } from 'react-native-webview';



const AboutUs = ({navigation}) => {
    return (

        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <View>
                <View style={{ backgroundColor: "#BE2330", flexDirection: 'row', padding: 10 }}>

                    <TouchableOpacity onPress={() => { navigation.navigate('MyProfile1') }}>
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
                    source={{uri:env.webUrl+"api/userAppAbout" }} /> 


            </View>
            </View>
        </ScrollView>
    </SafeAreaView>


    )
}

export default AboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    }
})
