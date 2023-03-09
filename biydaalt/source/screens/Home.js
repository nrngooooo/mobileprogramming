import { View, Text, StyleSheet, ScrollView , TouchableOpacity, Image,SafeAreaView,Platform,StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () =>{
  const navigator = useNavigation();
  return (
  <SafeAreaView>
  <ScrollView>
    <View style={style.container}>
      <View style={style.text}> 
        <Text style={style.text1}>Сайн байна уу</Text>
        <Text>abc</Text>
      </View>
      <View style={style.dood}>
      <ScrollView style ={style.scroll} horizontal={true}>
        <TouchableOpacity onPress={() => navigator.navigate('Detail')}>
          <Image source={require("../../assets/favicon.png")} style={style.draft1}></Image>
          
        </TouchableOpacity>
        <Image source={require("../../assets/favicon.png")} style={style.draft2}></Image>
        <Image source={require("../../assets/splash.png")} style={style.draft3}></Image>
        </ScrollView>
      </View>
    </View>
  </ScrollView>
  </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,

  },
  draft1: {
    width : 100,
    height: 100,
    margin: 10,
  },
  draft2: {
    width : 100,
    height: 100,
    margin: 10,
  },
  draft3: {
    width : 100,
    height: 100,
    margin: 10,
  },
  scroll:{
    backgroundColor: "white",

  },
  text: {
    flexDirection: 'row'
  },
  text1:{
    
  }
})

export default HomeScreen