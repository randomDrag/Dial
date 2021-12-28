import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { env } from '../env';


const StaticWebView = ({navigation, route}) => {
    const {apiFiller, name} = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name + "dfgh",
        })
    }, [])
    const errorHandler = () => {
        Alert.alert("Contact Support")
        navigation.navigate(("MyProfile1"))
    }

    console.log(env.webUrl + apiFiller);

    return (
        <View style={{flex: 1, backgroundColor: "black", borderWidth: 10}}>
            <StatusBar barStyle="dark-content" backgroundColor = "black"  />
            <SafeAreaView style={{
                flex: 1,
                backgroundColor:"orange"
            }}>
                <WebView
                    source={{ uri: "https://www.google.co.in/"}}
                    onError={errorHandler}
                />
            </SafeAreaView>
        </View>
    )
}
export default StaticWebView
const styles = StyleSheet.create({
})