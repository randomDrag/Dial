import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
// import { Camera } from 'expo-camera';


// import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { env } from '../env';
import axiosBaseUrl from '../axiosBaseUrl'


const EditProfile = ({ navigation }) => {

    const [image, setImage] = useState("")
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

   
    const takePhotoFromCamera = () => {
        <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
            </View>
        </Camera>
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result,"===========>result");

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    // const[image,setImage]=useState('');

    const changePerofile = () => {
        axiosBaseUrl.post("api/updateProfile", {

            name: name,
            email: email,
             image:image,
           

        },)
        .then((res) => {
            console.log('Success........ ', res);
            alert(res.data)
        }).catch((err) => {
            console.log('Error........ ', err);
            alert(err)
        })
    }

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>

            <TouchableOpacity style={styles.panelButton}
                onPress={takePhotoFromCamera}
            >
                <Text style={styles.panelButtonTitle}>Take Photo</Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.panelButton}
                onPress={pickImage}
            >
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (

        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>

    );
    console.log(
        image,
        hasPermission,
        type,
        name,
        email,)
    const bs = React.createRef();
    const fall = new Animated.Value(1);
    return (
        <SafeAreaView
            style={{ width: "100%", height: "100%" }}
        >
            <BottomSheet
                // style={{marginTop:50}}
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}

            />
            <ScrollView>

                <View style={styles.Container}>

                    <View style={{ backgroundColor: "#be2430", padding: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', marginTop: 0, alignItems: 'center' ,padding:10}}>
                                <TouchableOpacity onPress={() => navigation.navigate('MyProfile1')}>
                                    <Image
                                        style={{ width: 10, height: 15, top: 0, }}
                                        source={require('../assets/back.png')} />
                                </TouchableOpacity>
                                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>Edit Profile</Text>

                            </View>


                        </View>
                    </View>




                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, borderWidth: 1, alignSelf: "center", borderRadius: 150 }}>
                            <Image
                                style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 150 / 2, alignItems: 'center' }}
                                source={{ uri: image }}
                            // source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80" }}
                            />
                            <View style={{ justifyContent: 'flex-end', alignItems: 'center', bottom: 10, position: "absolute", width: "60%", overflow: 'visible' }}>
                                <Image
                                    style={{ width: 15, height: 15, }}
                                    source={require('../assets/Group.png')} />

                            </View>


                        </View>

                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                        <Text style={{ fontSize: 15, fontWeight: '700', alignItems: 'center' }}> Hii Shubham Chauhan</Text>

                    </View>

                    <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#1e1e1e' }}>Name</Text>
                        <TextInput style={{ fontSize: 15, fontWeight: '700', padding: 5, outline: 'none' }}
                            onChangeText={setName}
                            placeholder="Shubham Chauhan"></TextInput>

                    </View>

                    <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#1e1e1e' }}>Email</Text>
                        <TextInput style={{ fontSize: 15, fontWeight: '700', padding: 5, outline: 'none' }}
                            onChangeText={setEmail}

                            placeholder="Email ID "></TextInput>


                    </View>

                    <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#1e1e1e' }}>Mobile</Text>
                        <TextInput style={{ fontSize: 15, fontWeight: '700', padding: 5, outline: 'none' }}

                            placeholder="8571056426"></TextInput>

                    </View>

                    <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#1e1e1e' }}>Address</Text>
                        <TextInput style={{ fontSize: 15, fontWeight: '700', padding: 5, outline: 'none' }}
                            placeholder="Delhi , India  "></TextInput>

                    </View>

                    {/* <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 10, fontWeight: '700' }}>Name</Text>
                        <Text style={{ fontSize: 15, fontWeight: '700' }}>Shubham Chuhan</Text>


                    </View>


                    <View style={{ backgroundColor: "#D6D6D6", justifyContent: 'space-between', marginTop: 20, marginLeft: 10, marginRight: 10, padding: 10, borderRadius: 10 }}>
                       


                    </View> */}


                    <TouchableOpacity style={{ textAlign: 'center', top: 15, color: '#fff', right: 0, padding: 10, backgroundColor: '#be2430', marginBottom: 10, bottom: 20, marginLeft: 20, marginRight: 10, borderRadius: 10 }}

                        onPress={changePerofile}
                    >
                        <Text style={{ textAlign: 'center', top: 10, color: '#fff', right: 20, padding: 5, borderRadius: 0, fontWeight: 'bold' }}>Change Details </Text>

                    </TouchableOpacity>


                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderWidth: 0
    },
    CircleShape: {
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        backgroundColor: '#be2430',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },



    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    // textInput: {
    //     flex: 1,
    //     marginTop: Platform.OS === 'ios' ? 0 : -12,
    //     paddingLeft: 10,
    //     color: '#05375a',
    // },
})
