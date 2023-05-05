import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Image, Pressable } from 'react-native';
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

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
      <ScrollView style={styles.body}></ScrollView>
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
  }
})