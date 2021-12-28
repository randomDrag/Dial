import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { env } from "../env";
import axiosBaseUrl from "../axiosBaseUrl";
import moment from "moment";
import CalendarPicker from 'react-native-calendar-picker';


const Counsellers = ({ navigation, route }) => {
  const [counProfile, setCounProfile] = useState([]);
  const [selectedConType, setSelectedConType] = useState("");
  const [selectTime, setSelectedTime] = useState("");

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);


  const [details, setDetails] = useState({});

  const [weekDays, setWeeksDays] = useState([]);
  const [days, setDays] = useState([]);



  const [selectedDays, setSelectedDays] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectCounselor, setSelectCounselor] = useState("");
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([]);
  const [time, setTimes] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [day, setDay] = useState("");

  // const [selectItem, setSelectItem] = useState("")

  // const[]

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };


  const selectAppoinmentDate=()=>{
    
    <CalendarPicker
    startFromMonday={true}
    allowRangeSelection={true}
    minDate={new Date(2018, 1, 1)}
    maxDate={new Date(2050, 6, 3)}
    weekdays={
      [
        'Mon', 
        'Tue', 
        'Wed', 
        'Thur', 
        'Fri', 
        'Sat', 
        'Sun'
      ]}
    months={[
      'January',
      'Febraury',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]}
    previousTitle="Previous"
    nextTitle="Next"
    todayBackgroundColor="#e6ffe6"
    selectedDayColor="#66ff33"
    selectedDayTextColor="#000000"
    scaleFactor={375}
    textStyle={{
      fontFamily: 'Cochin',
      color: '#000000',
    }}
    onDateChange={onDateChange}
  />
  }
  const { counsellorData } = route.params;
  // console.log(">>>>/>>>>>>>>>>>>>>>>>>>>>>>>>>>>data........... ", counsellorData.id)
  useEffect(() => {
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>data........... ",
      counsellorData.id
    );

    axiosBaseUrl
      .get("api/getCounselorList", {})
      .then((res) => {
        console.log(res);
        setCounProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosBaseUrl
      .get(
        `api/getCounselorDetails`,
        {
          params: {
            counselor_id: counsellorData.id,
          },
        },
        {}
      )
      .then((res) => {
        console.log("......,,.......", res.data?.data);
        // setWeeksDays(res.data?.data?.final_slots)
        // setDays(res.data.)
        setSelectedTimes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // axiosBaseUrl.get("api/getSlotByDayId?counselor_id=25", {

    // }).then((res) => {
    //     console.log("12345rfvfgbbdv", res.data.data)
    //     setSelectedTimes(res.data.data)

    // }).catch((err) => {
    //     console.log(err)
    // })
  }, []);

  const selectItem = (e) => {
    console.log(e);

    setTimes(e);
  };

  const selectDate = (d) => {
    console.log(d);

    setDate(d);
  };

  const selectType = (t) => {
    console.log(t);

    setType(t);
  };

  const selectDays = (d1) => {
    console.log(d1);

    setDay(d1);
  };

  console.log("Date:///////////////", time);

  const bookAppoinment = (id) => {
    console.log("fdgfhghkiyfc ");
    console.log("..........nbvcxzcvbn.......", time);
    console.log("..........nbvcxzcvbn.......", date);
    console.log("..........nbvcxzcvbn.......", id);
    console.log("..........nbvcxzcvbn.......", type);
    console.log(".................344gdc.......", day);

    axiosBaseUrl
      .post("api/bookAppoinment", {
        counselor_id: id,
        // slot_id: slot_id,
        appointment_date: date,
        type: type,
      })
      .then((res) => {
        console.log("....response....", res);
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log("....error....", err);
      });
  };

  const selectDaysType = () => {};

  const renderTime = (x1) => {
    const item = x1.item;
    return (
      <View style={{ flexDirection: "row", marginTop: 10, marginRight: 0 }}>
        <TouchableOpacity
          style={{
            width: 110,
            borderColor: "#be2430",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              color: "#000",
              marginLeft: 0,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            {item?.from_time}

            <Text>
              {" :"} {item?.till_time}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderWeeks = (x) => {
    const item = x.item;
    const index = x.index;

    return (
      <View style={{ flexDirection: "row", marginTop: 10, marginRight: 0 }}>
        <TouchableOpacity
          style={{ marginStart: 10 }}
          onPress={() => selectDays(item.name)}
          style={{
            width: 110,
            borderColor: "#be2430",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#fff",
            marginStart: 10,
          }}
        >
          <Text style={{ fontSize: 15, textAlign: "center", marginRight: 10 }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDate = (y) => {
    const item = y.item;
    return (
      <View style={{ flexDirection: "row", marginTop: 10, marginRight: 0 }}>
        <TouchableOpacity
          style={{
            width: 110,
            borderColor: "#be2430",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              color: "#000",
              marginLeft: 0,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            {item.date}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  console.log("1234567890", selectedTimes);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#be2430", padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 0,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("HomePage1")}
              >
                <Image
                  style={{ width: 10, height: 15, top: 0 }}
                  source={require("../assets/back.png")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {" "}
                Councellrs
              </Text>
            </View>
            {/* <View style={{ marginRight: 10, padding: 3 }}>

                                <Image
                                    style={{ width: 15, height: 20, top: 0, }}
                                    source={require('../assets/alarm.png')} />
                            </View> */}
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            width: 350,
            marginTop: 10,
            flexDirection: "row",
            backgroundColor: "#d6d6d6",
            padding: 15,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
          }}
        >
          <Image
            // source={{uri:{d1.Pimage}}}
            style={{
              width: "30%",
              height: 120,
              left: 0,
              padding: 0,
              borderRadius: 10,
              padding: 0,
            }}
            source={
              env.baseUrl + counsellorData.counselor_details?.profile_image
            }
          />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              borderWidth: 0,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 18 }}>
              <span style={{ fontWeight: "900" }}>{counsellorData?.name}</span>
            </Text>
            <Text numberOfLines={1} style={{ fontSize: 15, left: 10 }}>
              {counsellorData?.counselor_details?.counselling_type}
            </Text>
            <Text style={{ fontSize: 15, left: 10 }}>
              {counsellorData?.ratting_count + " Star Rating"}
            </Text>
            <Text style={{ fontSize: 15, left: 10 }}>
              {"Fees " + counsellorData?.counselor_details?.fee}
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 20, top: 0 }}
              source={require("../assets/tools.png")}
            />

            <Text
              numberOfLines={1}
              style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}
            >
              Specialized in :{" "}
              <span style={{ fontWeight: "900" }}>
                {counsellorData?.counselor_details?.counselling_type}
              </span>
            </Text>
          </View>

          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 20, top: 0 }}
              source={require("../assets/book.png")}
            />

            <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
              Qualification :{" "}
              <span style={{ fontWeight: "900" }}>
                {" "}
                {counsellorData?.counselor_details?.qualification}
              </span>
            </Text>
          </View>

          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 20, top: 0 }}
              source={require("../assets/card.png")}
            />

            <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
              Payment Term :{" "}
              <span style={{ fontWeight: "900" }}>
                {counsellorData?.counselor_details?.payment_term}
              </span>
            </Text>
          </View>

          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 20, top: 0 }}
              source={require("../assets/camera.png")}
            />

            <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
              <span style={{ fontWeight: "900" }}>
                {counsellorData?.sessions_count_count}
              </span>{" "}
              + Personal Session
            </Text>
          </View>

          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 25, top: 0 }}
              source={require("../assets/trophy.png")}
            />

            <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
              <span style={{ fontWeight: "900" }}>
                {counsellorData?.counselor_details?.experience}
              </span>{" "}
              + Yrs Of Experience
            </Text>
          </View>

          <View
            style={{
              marginStart: 10,
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Image
              style={{ width: 25, height: 25, top: 0 }}
              source={require("../assets/gender.png")}
            />

            <Text style={{ fontSize: 13, marginLeft: 5, marginLeft: 20 }}>
              Gender :{" "}
              <span style={{ fontWeight: "900" }}>
                {counsellorData?.counselor_details?.gender}
              </span>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 0,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 150,
                marginStart: 10,
                borderColor: "#be2430",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "chat" ? "#be2430" : "#fff",
                marginStart: 10,
              }}
            >
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Image
                  style={{ width: 22, height: 20, top: 0, marginLeft: 0 }}
                  source={require("../assets/chat.png")}
                />
                <Text
                  onPress={() => selectType("CHAT")}
                  style={{
                    color: "#fff",
                    marginLeft: 20,
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  chat
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                marginStart: 10,
                borderColor: "#be2430",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#fff",
                marginStart: 10,
              }}
            >
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Image
                  style={{ width: 20, height: 20, top: 0, marginLeft: 0 }}
                  source={require("../assets/phone.png")}
                />
                <Text
                  onPress={() => selectType("CALL")}
                  style={{
                    color: "#000",
                    marginLeft: 20,
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Call
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => selectAppoinmentDate()}
              style={{
                width: 150,
                borderColor: "#be2430",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#fff",
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  marginLeft: 0,
                  textAlign: "center",
                  fontSize: 15,
                  marginStart: 10,
                }}
              >
                SELECT DATE
              </Text>

            </TouchableOpacity>
            <TouchableOpacity
            
            ></TouchableOpacity>
          </View>

          {/* <View style={{ marginTop: 10, marginLeft: 0, borderWidth: 0 }}>
                        <Text style={{ fontSize: 15, fontWeight: "600" }}>Select Days </Text>

                        <FlatList
                            data={weekDays}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(x) => `${x.id}`}
                            renderItem={renderWeeks}
                        />







                        {/* <View>
                        <Text style={{ fontSize: 15, fontWeight: "600" }}>Select Date </Text>

                            <FlatList
                                data={weekDays}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(x) => `${x.id}`}
                                renderItem={renderDate}
                            />
                            {weekDays.map((y) => {
                                <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 0 }}>
                                    <TouchableOpacity style={{ width: 110, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", }}>
                                        <Text style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, }}>{y.date[0]}</Text>
                                    </TouchableOpacity>


                                </View>
                            })}


                        </View>





                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: "600" }}>Select Date </Text>
                        {weekDays.map((y) => {
                            return (
                                <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 0 }}>

                                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                        {
                                            y?.date?.map((item) => {
                                                return (
                                                    <TouchableOpacity style={{ width: 110, borderColor: "#be2430", padding: 10, borderRadius: 10, borderWidth: 1, backgroundColor: "#fff", marginRight: 10 }}>

                                                        <Text
                                                            onPress={() => selectDate(item)}
                                                            style={{ color: "#000", marginLeft: 0, textAlign: 'center', fontSize: 15, marginStart: 10 }}>{item}</Text>
                                                    </TouchableOpacity>

                                                )
                                            })
                                        }
                                    </ScrollView>

                                </View>
                            )
                        })}
                    </View> */}

          <View>
            <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 10 }}>
              Select Time Sechdule{" "}
            </Text>

            {/* <FlatList
                            data={selectedTimes}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(x) => `${x.id}`}
                            renderItem={renderTime}
                        /> */}

            {selectedTimes?.map((x1) => {
              // console.log("dates..........", x1);
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginRight: 0,
                  }}
                >
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {x1.slot?.map((item1) => {
                      return (
                        <View style={{}}>
                          <TouchableOpacity
                            style={{
                              borderColor: "#be2430",
                              padding: 10,
                              borderRadius: 10,
                              borderWidth: 1,
                              backgroundColor: "#fff",
                              marginRight: 10,
                              flexDirection: "row",
                            }}
                          >
                            <Text
                              onPress={() => selectDate(item1)}
                              style={{
                                flexDirection: "row",
                                color: "#000",
                                marginLeft: 0,
                                fontSize: 15,
                                marginStart: 10,
                              }}
                            >
                              {`${moment(item1?.from_time, "hh:mm").format(
                                "h:mm A"
                              )}: ${moment(item1?.till_time, "hh:mm").format(
                                "h:mm A"
                              )}`}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              );
            })}
          </View>

          <View>
            <TouchableOpacity
              //   onPress={() => { navigation.navigate('chat') }}
              //  onPress={alert("Book Appointment Successful")}

              onPress={() => {
                bookAppoinment(counsellorData.id, counsellorData.slot_id);
              }}
              style={{
                marginTop: 20,
                width: 300,
                marginStart: 10,
                borderColor: "#be2430",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#be2430",
                marginStart: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginLeft: 0,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "700",
                }}
              >
                Book An Appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Counsellers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
