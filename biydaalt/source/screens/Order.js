import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Image, Pressable } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ZahialgaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head0}>
        <View style={styles.i0}>
          <MaterialIcons style={styles.searchicon} name="search"></MaterialIcons>
        </View>
        <View style={styles.i1}>
          <MaterialCommunityIcons style={styles.bellicon} name="bell-outline"></MaterialCommunityIcons>
        </View>
      </View>
      <ScrollView horizontal>
        <View style={styles.head}>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/salon.png")}></Image>
            </View>
            <Text style={styles.utext}>Үсчин</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/makeup.png")}></Image>
            </View>
            <Text style={styles.utext}>Гоо сайхан</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/manicure.png")}></Image>
            </View>
            <Text style={styles.utext}>Маникюр</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/pedicure.png")}></Image>
            </View>
            <Text style={styles.utext}>Педикюр</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/cosmetics.png")}></Image>
            </View>
            <Text style={styles.utext}>Нүүр будалт</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/eye-makeup.png")}></Image>
            </View>
            <Text style={styles.utext}>Сормуус</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/body-massage.png")}></Image>
            </View>
            <Text style={styles.utext}>{`Биеийн 
массаж`}</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/wax.png")}></Image>
            </View>
            <Text style={styles.utext}>Вакс</Text>
          </Pressable>
          <Pressable style={styles.box}>
            <View style={styles.uview}>
              <Image style={styles.uicon} source={require("../images/hospital.png")}></Image>
            </View>
            <Text style={styles.utext}>{`Эмэгтэйчүүд
ийн эмнэлэг`}</Text>
          </Pressable>
        </View>
      </ScrollView>
      {/* <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875" /> */}
      <ScrollView style={styles.body}>
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
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  head0: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    padding: 10,
    backgroundColor: "#F5DADF"
  },
  searchicon: {
    fontSize: 30,
    color: "#3f3f40",
  },
  bellicon: {
    fontSize: 25,
    color: "#3f3f40",
  },
  i0: {
    flex: 10,
  },
  i1: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 2,
  },
  head: {
    backgroundColor: "#F5DADF",
    height: 155,
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  uview: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  uicon: {
    height: 50,
    width: 50,
  },
  utext: {
    color: "#2C3333",
    paddinTop: 10,
  },
  body: {
    backgroundColor: "white",
    height: 610,
  },
  ad: {
    height: 300,
    width: 360,
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    flexWrap: "wrap",
    margin: 25,
    borderWidth: 1,
    borderColor: "lightgray"
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
    color: "#003A6E"
  },
  adiconss: {
    flex: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  adlicon: {
    fontSize: 25,
    color: "lightgray",
    marginRight: 35,
  },
  addicon: {
    fontSize: 25,
    color: "lightgray",
    marginRight: 10,
  },
})