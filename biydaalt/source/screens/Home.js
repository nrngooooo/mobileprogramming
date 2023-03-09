import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, TouchableOpacity,Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View >
          <Text onPress={() => alert("Just Narangoo's app")}
            style={style.statictxt}>Welcome to my personal app :D</Text>
        </View>
        <View style={style.box1}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image source={require("../images/Lee_Jong-suk_March_2018.png")} style={style.draft1}></Image>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  statictxt: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: "italic",
  },
  box1: {
    height: "600",
    width:"400",
    borderRadius: 20,
    margin: 20,
    color: "white"
  }
})