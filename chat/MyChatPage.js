import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, Text, View, TouchableOpacity ,SafeAreaView,Image} from 'react-native'

const MyChatPage = ({navigation}) => {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'Hello developer this is me himanshu goyal',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
          avatar: 'https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg',
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (

    <SafeAreaView style={{ flex: 1,width:"100%",height:"100%", }}>
      <View style={{width:"100%",height:"100%"}}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor:"#be2430",padding:10}}>

        <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center', }}>
          <TouchableOpacity onPress={() => navigation.navigate('AppointmentHistory')}>
            <Image
              style={{ width: 10, height: 15, top: 0, }}
              source={require('../assets/back.png')} />

          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}> Chat</Text>

        </View>
        {/* <View style={{ marginRight: 10, padding: 3 }}>

        <Image
            style={{ width: 15, height: 20, top: 0, }}
            source={require('../assets/alarm.png')} />
    </View> */}
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
            </View>

    </SafeAreaView>

  )
}

export default MyChatPage

const styles = StyleSheet.create({})
