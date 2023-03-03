import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar,Platform } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.draft1}></View>
        <View style={styles.draft2}></View>
        <View style={styles.draft3}></View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
  draft1: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
    margin: 10,

  },
  draft2: {
    height: 100,
    width: 100,
    backgroundColor: "purple",
    margin: 10,

  },
  draft3: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    margin: 10,

  },
  // deed:{
  //   flex:1,
  //   backgroundColor:"black"
  // },
  // dood:{
  //   flex:1,
  //   backgroundColor:"blue"
  // }
})