import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, Pressable, SafeAreaView, Button , TextInput ,StatusBar,Platform} from 'react-native';
export default function App() {
  return (
    <SafeAreaView style ={helber.container}>
      <ScrollView>
      <View>
      
        <Pressable onPress={()=> alert("onpress")}
        onLongPress={()=> alert("onlongpress")}>
        <Image source={require("./assets/1.png")}
        style={{height:300, width: 300}}></Image>
        </Pressable>
        <Pressable onPress={()=> alert("narangoo")}
        onLongPress={()=> alert("booooooo")}>
        <Text>helloloooo</Text>
        </Pressable>
        <TextInput
          style={helber.input}
      />
        <Button title='click on me' onPress={()=>alert('clicked')} color="#010101"
        />
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const helber = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
  },
  texthuwirgal: {
    fontWeight: 2100,
    
   },
   input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding: 10,
    borderColor: "black",
   }
});
