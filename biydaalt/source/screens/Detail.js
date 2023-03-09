import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, Pressable, SafeAreaView, Button , TextInput} from 'react-native';
const DetailScreen = () =>{
  return (
    <SafeAreaView style ={style.container}>
      <ScrollView>
        <View>
          <Image source={require("../../assets/favicon.png")} style={style.draft1}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  draft1:{
    height: 200,
    width: 200,
  }
});


export default DetailScreen