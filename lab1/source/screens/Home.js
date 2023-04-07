import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sccrollcontainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingsmsg}>Өдрийн мэнд</Text>
          <MaterialCommunityIcons
            style={styles.greetingicon}
            name="ticket-percent"
          ></MaterialCommunityIcons>
          <Octicons style={styles.greetingicon} name="bell-fill"></Octicons>
          <Image style={styles.human} source={require("../images/icon.png")}></Image>
        </View>
        <View style={styles.unguv0}>
          <View style={styles.unguv1}>
            <Text style={styles.ungutxt}>Товч ном</Text>
            <Entypo style={styles.unguicon} name="triangle-down"></Entypo>
          </View>
          <View style={styles.unguv2}>
            <Text style={styles.ungutxt}>Цахим ном</Text>
            <FontAwesome style={styles.unguicon} name="square"></FontAwesome>
          </View>
          <View style={styles.unguv3}>
            <Text style={styles.ungutxt}>Аудио ном</Text>
            <Entypo style={styles.unguicon} name="triangle-right"></Entypo>
          </View>
          <View style={styles.unguv4}>
            <Text style={styles.ungutxt}>Подкаст</Text>
            <FontAwesome5 style={styles.unguicon} name="circle"></FontAwesome5>
          </View>
        </View>
        <Button
        onPress={() => navigation.navigate("AimagList")}
      />
        <Pressable>
          <View style={styles.ontsloh}>
            <Text style={styles.jijigtxt}>оскар-ын шагналт бүтээл</Text>
            <Text style={styles.ontslohstatictxt}>Энэ 7 хоногийн онцлох</Text>

            <Image
              source={require("../images/Lee_Jong-suk_March_2018.png")}
              style={styles.ontslohzurg}
            ></Image>
          </View>
        </Pressable>
        <View style={styles.ontsloh}>
          <Text style={styles.jijigtxt}>зөвхөн плас-аас</Text>
          <Text style={styles.ontslohstatictxt}>
            Нетфликс ба Шинэчлэлийн Соёл
          </Text>
          <View>
            <Image
              source={require("../images/Lee_Jong-suk_March_2018.png")}
              style={styles.ontslohzurg}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    marginTop: 25,
    fontSize: 30,
    fontWeight: "700",
  },
  sccrollcontainer: {
    backgroundColor: "#CCC",
  },
  unguv0: {
    height: 210,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  unguv1: {
    width: 150,
    height: 80,
    backgroundColor: "#0dc9c9",
    marginTop: 20,
    borderRadius: 20,
  },
  unguv2: {
    width: 150,
    height: 80,
    backgroundColor: "#f05454",
    marginTop: 20,
    borderRadius: 20,
  },
  unguv3: {
    width: 150,
    height: 80,
    backgroundColor: "#ffaf27",
    marginTop: 10,
    borderRadius: 20,
  },
  unguv4: {
    width: 150,
    height: 80,
    backgroundColor: "#9462cf",
    marginTop: 10,
    borderRadius: 20,
  },
  ungutxt: {
    color: "white",
    fontsize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  unguicon: {
    fontSize: 40,
    color: "white",
    marginLeft: 10,
  },
  greetingicon: {
    fontSize: 28,
    color: "#038cfc",
    marginLeft: 10,
  },
  human:{
    width: 45,
    height: 45,
  },
  ontsloh: {
    height: 450,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "hidden",
  },
  ontslohstatictxt: {
    marginLeft: 10,
    fontSize: 32,
    fontWeight: "bold",
  },
  ontslohzurg: {
    width: 400,
  },
  jijigtxt: {
    margin: 15,
    marginLeft: 10,
    fontSize: 15,
    color: "grey",
    textTransform: "uppercase",
  },
});
