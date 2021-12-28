import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const CallWithUser = ({ navigation }) => {

    const [chat, setChat] = useState([
        {
            "id": 1,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 2,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 3,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 4,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 5,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 6,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 7,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

        {
            "id": 8,
            "image": "https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg",
            "name": "ABC ZXY",
            "time": "Today : 12:00 AM",
            "date": "9 Dec 2021"
        },

    ])


    const renderChat = (x) => {

        const data = x.item
        return (



            <View style={{ flexDirection: 'column', backgroundColor: '#d6d6d6', padding: 15, borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Image
                        style={{ width: 40, height: 40, alignItems: 'center', borderRadius: 15 }}
                        source={data.image}
                    />

                    <View>
                        <Text style={{ fontWeight: 700 }}>{data.name}</Text>
                        <Text>{data.time}</Text>
                        <Text>{data.date}</Text>



                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image
                            style={{ width: 20, height: 20, alignItems: 'center', right: 10 }}
                            source={data.image}
                        /> */}
                        <Image
                            style={{ width: 20, height: 20, alignItems: 'center', }}
                            source={require('../assets/greenCall.png')}
                        />

                        {/* <Image
                            style={{ width: 20, height: 20, alignItems: 'center', }}
                            source={require('../assets/greenCall.png')}
                        /> */}



                    </View>




                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>

                    <View style={{ backgroundColor: "#BE2330", flexDirection: 'row', padding: 10 }}>

                        <TouchableOpacity onPress={() => { navigation.navigate('CounsllersHome') }}>
                            <Image
                                style={{ width: 10, height: 15, top: 10, padding: 10 }}
                                source={require('../assets/back.png')} />
                        </TouchableOpacity>

                        <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10, padding: 10 }}>Call with user</Text>

                    </View>

                    <View>

                        <FlatList

                            data={chat}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(x) => `${x.id}`}
                            renderItem={renderChat}

                        />

                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CallWithUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
