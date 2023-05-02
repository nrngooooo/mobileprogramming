import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Image,Pressable } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

export default function ZurhaiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.i0}>
          <Ionicons style={styles.proicon} name="person-circle-outline"></Ionicons>
        </View>
      </View>
      <ScrollView>
      <View style={styles.h}>
        <View style={styles.zodiaccircle}>
          <Image style={styles.zimg} source={require("../images/capricorn-symbol-icon.png")}></Image>
        </View>
        <Text style={styles.ztext}>Матар</Text>
        <Text style={styles.zdate}>12/22 - 01/19</Text>
        <View style={styles.zodiac}>
            <Text style={styles.zodhead}>Өнөөдрийн зурхай</Text>
            <Text style={styles.zoddetail}>Өнөөдөр та өөрийн хийхийг хүсэж буй зүйлд ...</Text>
            <Text style={styles.line}>____________________________________________</Text>
            <Pressable onPress={() => {
              navigation.navigate("Horos")
            }}>
              <Text style={styles.ptext}>Дэлгэрэнгүй</Text>
            </Pressable>
          </View>
          <View style={styles.fview}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#F5DADF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    padding: 10,
  },
  proicon: {
    fontSize: 30,
    color: "#3f3f40",
  },
  i0: {
    flex: 1,
  },
  h: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  zodiaccircle: {
    marginTop: 50,
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  zimg: {
    height: 82,
    width: 85,
  },
  ztext: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    color: "#2C3333",
  },
  zdate: {
    fontSize: 14,
    color: "#2C3333",
    marginTop: 20,
  },
  zodiac: {
    height: 160,
    width: 360,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 25,
    marginTop: 50,
    padding: 20,
  },
  zodhead: {
    fontSize: 17,
    color: "#2C3333",
    fontWeight: "500"
  },
  zoddetail: {
    fontSize: 15,
    paddingTop: 5,
    color: "gray",
  },
  line: {
    color: "gainsboro",
  },
  ptext: {
    color: "#FC7D8F",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 215,
    margin: 10,
  },
  fview: {
    backgroundColor: "white",
    width: "100%",
    height: 500,
  }

})