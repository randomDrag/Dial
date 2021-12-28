import React from 'react'
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';


// const CounsllersAudioCall = () => {

//     const VideoCall = () => {
//         const onConferenceTerminated = (nativeEvent) => {
//           /* Conference terminated event */
//         }
      
//         const onConferenceJoined = (nativeEvent) => {
//           /* Conference joined event */
//         }
      
//         const onConferenceWillJoin= (nativeEvent) => {
//           /* Conference will join event */
//         }
      
//         useEffect(() => {
//           setTimeout(() => {
//             const url = 'https://meet.jit.si/deneme'; // can also be only room name and will connect to jitsi meet servers
//             const userInfo = { displayName: 'User', email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
//             JitsiMeet.call(url, userInfo);
//             /* You can also use JitsiMeet.audioCall(url) for audio only call */
//             /* You can programmatically end the call with JitsiMeet.endCall() */
//           }, 1000);
//         }, [])
//     }
      
//     return (
//         <SafeAreaView>
//             <ScrollView>
//                 <View style={styles.Container}>

//                     <View style={{ backgroundColor: "#be2430", padding: 10, }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

//                             <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' }}>
//                                 <TouchableOpacity onPress={() => navigation.navigate('CounsllersHome')}>
//                                     <Image
//                                         style={{ width: 10, height: 15, top: 0, }}
//                                         source={require('../assets/back.png')} />
//                                 </TouchableOpacity>
//                                 <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Profile</Text>

//                             </View>


//                         </View>
//                     </View>

//                     <JitsiMeetView onConferenceTerminated={onConferenceTerminated} onConferenceJoined={onConferenceJoined} onConferenceWillJoin={onConferenceWillJoin} style={{ flex: 1, height: '100%', width: '100%' }} />

//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// export default CounsllersAudioCall

// const styles = StyleSheet.create({
//     Container: {
//         flex: 1
//     },
// })
