import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { env } from "../env";
import axiosBaseUrl from "../axiosBaseUrl";

const HomePage = ({ navigation, route }) => {
  const [profile, setProfile] = useState("");

  // const [isLoading, setLoading] = useState(true);
  const [counsellers, setcounsellers] = useState([]);

  // get Popular Councllers

  const [popularCounsellers, setPopularCounsllers] = useState([]);
  // get Councllers

  const [womenList, setWomenList] = useState([]);

  useEffect(() => {
    axiosBaseUrl
      .get("api/getCounselorList", {})
      .then((res) => {
        console.log(" Coun : ", res.data);
        setcounsellers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(" error : ", err);

        alert("Some Think Went Wrong..... ");
      });

    axiosBaseUrl
      .get("api/getPopularCounselorList", {})
      .then((res) => {
        console.log("All Coun", res.data);
        setPopularCounsllers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosBaseUrl
      .get("api/getProfile", {})
      .then((res) => {
        console.log();
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosBaseUrl
      .get("api/getWomenPersonalCounselorList", {})
      .then((res) => {
        setWomenList(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCounsellers = (x) => {
    const item = x.item;

    return (
      <ScrollView horizontal>
        <View style={styles.BOX}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() =>
              navigation.navigate("Counsellers", {
                counsellorData: item,
              })
            }
          >
            <View style={styles.CircleShape}>
              <Image
                source={env.baseUrl + item.counselor_details?.profile_image}
                style={{ width: 45, height: 45, borderRadius: 20 }}
                resizeMode="stretch"
              />
            </View>

            <Text
              numberOfLines={1}
              ellipsizeMode="end"
              style={{
                color: "#000",
                fontSize: 12,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
            <Text
              ellipsizeMode="end"
              numberOfLines={1}
              style={{ fontSize: 10, marginLeft: 15 }}
            >
              {item.counselor_details?.counselling_type}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  1;

  const renderPopular = (y) => {
    const d1 = y.item;
    return (
      <View
        style={{
          width: 300,
          marginTop: 30,
          flexDirection: "row",
          backgroundColor: "#d6d6d6",
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          marginStart: 10,
          marginEnd: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 0,
            width: "100%",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("Counsellers", {
              counsellorData: d1,
            })
          }
        >
          <Image
            // source={{uri:{d1.Pimage}}}
            style={{
              width: "50%",
              height: 120,
              left: 0,
              padding: 0,
              borderRadius: 10,
              padding: 0,
            }}
            source={env.baseUrl + d1.counselor_details?.profile_image}
          />

          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              borderWidth: 0,
              flex: 1,
            }}
          >
            <Text numberOfLines={1} style={{ fontSize: 18, width: "100%" }}>
              {d1.name}
            </Text>

            <View
              style={{
                marginStart: 10,
                flexDirection: "row",
                marginTop: 7,
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 15, height: 15, top: 0 }}
                source={require("../assets/tools.png")}
              />

              <Text numberOfLines={1} style={{ fontSize: 10, marginLeft: 15 }}>
                {d1.counselor_details?.counselling_type}
              </Text>
            </View>

            <View
              style={{
                marginStart: 10,
                flexDirection: "row",
                marginTop: 7,
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 15, height: 15, top: 0 }}
                source={require("../assets/camera.png")}
              />

              <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
                {d1?.sessions_count_count}{" "}
              </Text>
            </View>

            {/* <View style={{ marginStart: 10, flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>


                            <Image
                                style={{ width: 15, height: 15, top: 0 }}
                                source={require('../assets/feed.png')} />

                            <Text
                                numberOfLines={1}
                                style={{ fontSize: 10, marginLeft: 15 }}>{ }</Text>


                        </View> */}
            <View
              style={{
                marginStart: 10,
                flexDirection: "row",
                marginTop: 7,
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 15, height: 15, top: 0 }}
                source={require("../assets/checkmark.png")}
              />

              <Text numberOfLines={1} style={{ fontSize: 10, marginLeft: 15 }}>
                {d1.counselor_details?.experience + " Experience"}
              </Text>
            </View>

            <View
              style={{
                marginStart: 10,
                flexDirection: "row",
                marginTop: 7,
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 10, height: 10, top: 0 }}
                source={require("../assets/star.png")}
              />

              <Text numberOfLines={1} style={{ fontSize: 10, marginLeft: 15 }}>
                3 Star rating{" "}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderWomen = (z) => {
    const item = z.item;

    return (
      <ScrollView horizontal>
        <View style={styles.BOX}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() =>
              navigation.navigate("Counsellers", {
                counsellorData: item,
              })
            }
          >
            <View style={styles.CircleShape}>
              <Image
                source={env.baseUrl + item.counselor_details?.profile_image}
                style={{ width: 45, height: 45, borderRadius: 20 }}
                resizeMode="stretch"
              />
            </View>

            <Text
              style={{
                color: "#000",
                fontSize: 12,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 10,
                textAlign: "center",
                marginTop: 2,
              }}
            >
              {item?.counselor_details?.counselling_type}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          borderWidth: 0,
          height: "100%",
          showsHorizontalScrollIndicator: false,
        }}
      >
        <View style={{ backgroundColor: "#be2430" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text
                style={{
                  color: "#c6c6c6",
                  fontSize: 10,
                  fontWeight: "500",
                  left: 10,
                  marginLeft: 10,
                }}
              >
                Good Morning
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Shubham Chauhan
              </Text>
            </View>
            {/* <View style={{ marginRight: 10, padding: 3 }}>

                            <Image
                                style={{ width: 15, height: 20, top: 5, }}
                                source={require('../assets/alarm.png')} />
                        </View> */}
          </View>

          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 5,
              padding: 5,
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 15, height: 15, left: 20 }}
              source={require("../assets/search.png")}
            />

            <TextInput
              style={{
                marginLeft: 30,
                outline: "none",
                bottom: 5,
                width: "100%",
                padding: 2,
                backgroundColor: "#fff",
                borderColor: "#fff",
              }}
              placeholder="Search Here"
            />
          </View>

          <View
            style={{
              backgroundColor: "#d6d6d6",
              borderRadius: 15,
              padding: 0,
              flexDirection: "row",
              position: "äbsolute",
              bottom: -40,
              marginHorizontal: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 120,
                left: 0,
                padding: 0,
                borderRadius: 10,
              }}
              source={require("../assets/banner.png")}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-between",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 15 }}>Counsellers</Text>

          {/* <TouchableOpacity onPress={() => navigation.navigate('AllCounsellers')}> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("AllCounsellers")}
          >
            <Text style={{ color: "#000", fontSize: 15 }}>View All </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0,
            marginTop: 0,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FlatList
            data={counsellers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(x) => `${x.id}`}
            renderItem={renderCounsellers}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            top: 20,
            justifyContent: "space-between",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 15 }}>
            {" "}
            Popular Counsellers
          </Text>

          {/* <TouchableOpacity onPress={() => navigation.navigate('AllCounsellers')}> */}
          {/* <TouchableOpacity onPress= {() => alert("GHAH")}>
                    <Text style={{ color: '#000', fontSize: 15, }}>View All </Text>
                    </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("AllCounsellers")}
          >
            <Text style={{ color: "#000", fontSize: 15 }}>View All </Text>
          </TouchableOpacity>
        </View>
        {/* Popular Councellrs */}

        <View
          style={{
            borderWidth: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 10,
          }}
        >
          <FlatList
            data={popularCounsellers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(y) => `${y.id}`}
            renderItem={renderPopular}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            top: 20,
            justifyContent: "space-between",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "#000", fontSize: 15 }}>
            {" "}
            Women Counsellers
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AllCounsellers")}
          >
            <Text style={{ color: "#000", fontSize: 15 }}>View All </Text>
          </TouchableOpacity>
        </View>

        {/* Rative Councellrs */}
        <View
          style={{
            borderWidth: 0,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <FlatList
            data={womenList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(z) => `${z.id}`}
            renderItem={renderWomen}
          />
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  BOX: {
    marginTop: 20,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    height: 100,
    width: 100,
    justifyContent: "center",
    // alignItems: 'center',
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#d6d6d6",
    alignItems: "center",
    // textAlign: 'center'
  },
  CircleShape: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    backgroundColor: "#be2430",
    alignItems: "center",
    justifyContent: "center",
  },
});
