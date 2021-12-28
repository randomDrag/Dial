import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AllCounsellers from '../../components/AllCounsellers';
import Counsellers from '../../components/Counsellers';
import MyWallet from '../../components/MyWallet';
import StaticWebView from '../../components/StaticWebView';
import AboutUs from '../AboutUs';
import AppointmentHistory from '../AppointmentHistory';
import EditProfile from '../EditProfile';
import Enquiry from '../Enquiry';
import History from '../History';
import HomePage from '../HomePage';
import PrivacyPolicy from '../PrivacyPolicy';
import Profile from '../Profile';
import TermAndCondition from '../TermAndCondition';
import UserProfile from '../UserProfile';
import NestedScreen from './NestedScreen';
import MyChatPage from '../../chat/MyChatPage'
import CounsllersAudioCall from '../../Counsllers/CounsllersAudioCall';

const stack = createNativeStackNavigator();


const BottomTabsNav = () => {
    return (
        <stack.Navigator>

            <stack.Screen name="HomePage1" component={HomePage} options={{ headerShown: false }} />
            <stack.Screen name="AllCounsellers" component={AllCounsellers} options={{ headerShown: false }} />
            <stack.Screen name="Wallet" component={MyWallet}  options={{ headerShown: false }} />
            <stack.Screen name="Counsellers" component={Counsellers} options={{headerShown:false}}/>
            <stack.Screen name="chat" component={MyChatPage} options={{headerShown:false}}/>

            <stack.Screen
                name="HomePage2"
                component={NestedScreen}
            />
            {/* <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
            {/* <stack.Screen name="Enquiry" component={Enquiry} options={{ headerShown: false }} /> */}
            {/* <stack.Screen name="Wallet" component={MyWallet} options={{headerShown:false}}/> */}
            {/* <stack.Screen name="MyChat" component={MyChat} options={{headerShown:false}} /> */}
        </stack.Navigator>


    );
}

export default BottomTabsNav;

const MyEnquiry = () => {
    return (
        <stack.Navigator >
            <stack.Screen name="Enquiry1" component={Enquiry} options={{ headerShown: false }} />
            <stack.Screen
                name="Enquiry2"
                component={NestedScreen}
            />
        </stack.Navigator>
    );
}

export { MyEnquiry }; // Stack-Navigator for Screen 2 Tab

const Wallet = () => {
    return (
        <stack.Navigator >
            <stack.Screen name="Wallet1" component={MyWallet} options={{ headerShown: false }} />

            <stack.Screen
                name="Wallet2"
                component={NestedScreen}
            />
        </stack.Navigator>
    );
}

export { Wallet };  // Stack-Navigator for Screen 3 Tab

// const Chat=()=>{

//     return(
//         <stack.Navigator >
//         <stack.Screen name="chat" component={MyChatPage} options={{ headerShown: false }} />

//         <stack.Screen
//             name="chat1"
//             component={NestedScreen}
//         />
//     </stack.Navigator>
//     )
// }

export {MyChatPage};

const MyProfile = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="MyProfile1" component={Profile} options={{ headerShown: false }} />
            <stack.Screen name="About" component={AboutUs} options={{ headerShown: false }} />
                    <stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown:false}}/>
                    <stack.Screen name="TermAndCondition" component={TermAndCondition} options={{headerShown:false}}/>
                    <stack.Screen name="History" component={History} options={{headerShown:false}}/>
                    <stack.Screen name="AppointmentHistory" component={AppointmentHistory} options={{headerShown:false}}/>
                    <stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
                    <stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }}/> 
                    {/* <stack.Screen name="call" component={CounsllersAudioCall} options={{ headerShown: false }}/> */}
                    <stack.Screen name="StaticWeb" component={StaticWebView}/>

            <stack.Screen
                name="MyProfile2"
                component={NestedScreen}
            />
        </stack.Navigator>


    )
}
export {MyProfile};



const styles = StyleSheet.create({})
