import { SafeAreaView, Text, View, StyleSheet, StatusBar, Platform, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sccrollcontainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingsmsg}>Өдрийн мэнд</Text>
          <Text>a</Text>
          <Text>b</Text>
          <Text>c</Text>
        </View>
        <View style={styles.unguv0}>
          <View style={styles.unguv1}>
            <Text style={styles.ungutxt}>Товч ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv2}>
            <Text style={styles.ungutxt}>Цахим ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv3}>
            <Text style={styles.ungutxt}>Аудио ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv4}>
            <Text style={styles.ungutxt}>Подкаст</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
        </View>
        <View style={styles.unguv0}>
          <View style={styles.unguv1}>
            <Text style={styles.ungutxt}>Товч ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv2}>
            <Text style={styles.ungutxt}>Цахим ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv3}>
            <Text style={styles.ungutxt}>Аудио ном</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv4}>
            <Text style={styles.ungutxt}>Подкаст</Text>
            <Entypo style={styles.unguicon} 
            name="triangle-down"></Entypo>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  greeting: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  greetingsmsg: {
    fontSize: 30,
    fontWeight: "700",
  },
  sccrollcontainer: {
    backgroundColor: "#CCC"
  },
  unguv0: {
    height: "350",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  unguv1: {
    width: 150,
    height: 100,
    backgroundColor: "aqua",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv2: {
    width: 150,
    height: 100,
    backgroundColor: "#FF5349",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv3: {
    width: 150,
    height: 100,
    backgroundColor: "yellow",
    marginTop: 20,
    borderRadius: 15,
  },
  unguv4: {
    width: 150,
    height: 100,
    backgroundColor: "violent",
    marginTop: 20,
    borderRadius: 15,
  },
  ungutxt: {
    color: "white",
    fontsize: 20,
  },
  unguicon:{
    fontSize: 40,
    color: "white",
    marginLeft: 10,
  }
})