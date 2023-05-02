import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Image,
  FlatList, TouchableOpacity, Pressable,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons, Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";


export default function Calendar({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderItem = ({ item }) => {
    const date = item.dateString;
    const isToday = date === selectedDate;
    const isCurrentDay = date === new Date().toISOString().split('T')[0];
    return (
      <Pressable
        onPress={() => handleDayPress(item)}
        style={[styles.dateContainer, isToday && { backgroundColor: "#58ACAC" }]}
      >
        <Text style={[styles.dateText, isToday && { color: 'white' }]}>{item.day}</Text>

        <Text onPress={() => handleDayPress(item)}
          style={[styles.dateNum, isToday && {}, isCurrentDay && { color: 'red' }]}>{item.udur}</Text>
      </Pressable>
    );
  };
  const zodiacItem = ({ item }) => {
    const date = item.dateString;
    const isToday = date === selectedDate;
    const isCurrentDay = date === new Date().toISOString().split('T')[0];
    return (
      <View style={[styles.zodiac, isCurrentDay, isToday]}>
        <Text style={[styles.zodhead, isToday && { color: 'black' }, isCurrentDay && { color: 'black' }]}>Зурхай: {item.horos}</Text>
        <Text style={styles.zoddetail}>Өнөөдөр</Text>
        <Text style={styles.line}>____________________________________________</Text>
        <Pressable onPress={() => {
          navigation.navigate("Horos")
        }}>
          <Text style={styles.ptext}>Дэлгэрэнгүй</Text>
        </Pressable>
      </View>
    );
  };
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    const dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 7; // Sunday is 0, Monday is 1, etc.
    const diff = dayOfWeek - i < 0 ? dayOfWeek - i + 7 : dayOfWeek - i;
    date.setDate(date.getDate() - diff);
    return {
      day: date.toLocaleDateString('mn-MN', { weekday: 'short' }).substring(12, 14),
      udur: date.toLocaleDateString('mn-MN', { weekday: 'short' }).substring(8, 10),
      horos: date.toLocaleDateString('mn-MN', { weekday: 'short' }).substring(0, 10),
      dateString: date.toISOString().split('T')[0],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['white', '#f8d2d7']}
        style={styles.background}>
        <View>
          <View style={styles.head0}>
            <View style={styles.i0}>
              <Ionicons style={styles.proicon} name="person-circle-outline"></Ionicons>
            </View>
            <View style={styles.i1}>
              <Octicons style={styles.calicon} name="calendar"></Octicons>
              <MaterialCommunityIcons style={styles.bellicon} name="bell-outline"></MaterialCommunityIcons>
            </View>
          </View>
          <FlatList
            horizontal
            data={weekDays}
            renderItem={renderItem}
          />
        </View>
        <ScrollView>
          <View style={styles.circle}></View>
          <View style={styles.note}>
            <Text style={styles.noteText}>Таны өдрийн тэмдэглэл</Text>
            <Text style={styles.noteText1}>
              {`Та энд өөрийн шинж тэмдэг болон 
мэдрэмжээ бичээрэй.`}</Text>
          </View>
          <View style={styles.ad}>
            <Image source={require("../images/12.jpg")}
              style={styles.adpic}>
            </Image>
            <View style={styles.adiconss}>
              <View style={styles.adtextview}>
                <Text style={styles.adtext}>Сурталчилгаа дээр үнэлгээ өгөөрэй.</Text>
              </View>
              <Fontisto style={styles.adlicon} name="like"></Fontisto>
              <Fontisto style={styles.addicon} name="dislike"></Fontisto>
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              data={weekDays}
              renderItem={zodiacItem}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    marginBottom: 100,
  },
  head0: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    padding: 10,
  },
  proicon: {
    fontSize: 30,
    color: "#3f3f40",
  },
  calicon: {
    fontSize: 25,
    color: "#3f3f40",
    marginRight: 65,
  },
  bellicon: {
    fontSize: 25,
    color: "#3f3f40",
    paddingRight: 40,
  },
  i0: {
    flex: 9,
  },
  i1: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 3,
  },
  dateContainer: {
    padding: 15,
    margin: 5,
    borderRadius: 25,
  },
  dateText: {
    fontSize: 12,
    color: "#9393AA",
  },
  dateNum: {
    fontSize: 13,
    paddingTop: 14,
    fontWeight: "bold",
    color: "#164262",
  },
  circle: {
    backgroundColor: "white",
    width: 320,
    height: 320,
    borderRadius: 160,
    marginLeft: 50,
    marginTop: 20,
  },
  note: {
    height: 120,
    width: 360,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 30,
    padding: 20,
  },
  noteText: {
    fontSize: 16,
    fontWeight: "500",
  },
  noteText1: {
    fontSize: 13,
    color: "#3b3937",
    paddingTop: 10,
  },
  ad: {
    height: 300,
    width: 360,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 30,
    overflow: "hidden",
    flexWrap: "wrap",
  },
  adpic: {
    width: 360,
    height: 240,
    resizeMode: "stretch",
  },
  adtextview: {
    width: 250,
  },
  adtext: {
    fontSize: 15,
    color: "#164262"
  },
  adiconss: {
    flex: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  adlicon: {
    fontSize: 25,
    color: "gray",
    marginRight: 35,
  },
  addicon: {
    fontSize: 25,
    color: "gray",
    marginRight: 10,
  },
  zodiac: {
    height: 140,
    width: 360,
    borderRadius: 20,
    backgroundColor: "white",
    margin: 30,
    padding: 20,
  },
  zodhead: {
    fontSize: 17,
  },
  zoddetail: {
    fontSize: 15,
    paddingTop: 5,
    color: "gray",
  },
  line: {
    color: "gray",
  },
  ptext: {
    color: "#FC7D8F",
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "flex-end"
  }
});
