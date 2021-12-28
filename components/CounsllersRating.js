import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'
import axiosBaseUrl from '../axiosBaseUrl'
import { env } from '../env'

const CounsllersRating = ({ navigation }) => {



    // Set the default Ratings Selected
    const [defaultRating, setDefaultRating] = useState("");
    // Set the max number of Ratings
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star
    const starImageFilled =
        'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star_fill.png';
    // Empty Star
    const starImageCorner =
        'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star.png';
    // Half Star
    const startHalfFilled =
        'https://www.techup.co.in/wp-content/uploads/2020/11/ic_star_half.png';


    const [review, setReview] = useState([])


    const onStarClick = (item, bool) => {
        if (bool) {
            item = item - 1 + 0.5;
        }
        setDefaultRating(item);
    };


    useEffect(() => {

        axiosBaseUrl.get( "api/getRating", {
           
        }).then((res) => {
            // setDefaultRating(res.data?.data?.rating[0].ratting_count)
            console.log("1234", res.data?.data?.rating[0].ratting_count)


            setReview(res.data.data.rating)
        }).catch((err) => {

        })

    }, [])

    const CustomRatingBar = ({ rated }) => {
        return (
            <View style={styles.ratingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <View>

                            <Image
                                style={styles.imageStyle}
                                source={
                                    item <= rated
                                        ? { uri: starImageFilled }
                                        : item >= rated && item < rated + 1
                                            ? { uri: startHalfFilled }
                                            : { uri: starImageCorner }
                                }
                            />
                            {/* <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    position: 'absolute',
                                }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{
                                        width: 20,
                                        height: 40,
                                    }}
                                    onPress={() => onStarClick(item, true)}
                                />

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={{
                                        width: 20,
                                        height: 40,
                                    }}
                                    onPress={() => onStarClick(item, false)}
                                />
                            </View> */}
                        </View>
                    );
                })}
            </View>
        );
    };



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

                        <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold", marginLeft: 10, padding: 10 }}>Review & Rating</Text>

                    </View>


                    <View style={{ width: "100%", height: "100%", borderWidth: 0 }}>


                        {review.map((x) => {

                            // console.log(">>>>>>>>>>>>>>>>>>>>>>>123",x)
                            return (

                                <View style={{ flexDirection: 'column', backgroundColor: '#d6d6d6', padding: 15, borderRadius: 10, marginLeft: 10, marginRight: 10, marginTop: 10, }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                        <Image
                                            style={{ width: 40, height: 40, alignItems: 'center', borderRadius: 15 }}
                                            source={x.image}
                                        />

                                        <View>
                                            <Text style={{ fontWeight: 700 }}>{x?.customer_details?.name}</Text>

                                            <CustomRatingBar rated={x.ratting_count} />

                                            <Text style={styles.textStyle}>
                                                {/* Display selected Ratings */}
                                                {x.ratting_count} / {Math.max.apply(null, maxRating)}
                                                {/* {data?.rating?.ratting_count} */}
                                            </Text>
                                            {/* <Text>{data?.rating[0].ratting_count}</Text> */}


                                        </View>
                    
                                        <Text style={{ textAlign: 'right' }}>{moment(x?.created_at).format("DD/MMM/YYYY")}</Text>
                                        {/* <Text style={{ textAlign: 'right' }}>{x?.created_at}</Text> */}



                                    </View>
                                </View>
                            )


                        })}



                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CounsllersRating

const styles = StyleSheet.create({
    ratingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 0,
    },

    imageStyle: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 13,
        color: '#000',
        marginTop: 5,
    },
})
