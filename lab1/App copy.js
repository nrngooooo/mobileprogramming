import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, Pressable, SafeAreaView, Button , TextInput} from 'react-native';
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
        onLongPress={()=> alert("zaaa ner ni")}>
        <Text>helloloooo</Text>
        </Pressable>
        <TextInput
          style={helber.input}
      />
        <Button title='darchih' onPress={()=>alert('darchihlaaa')} color="#010101"
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
