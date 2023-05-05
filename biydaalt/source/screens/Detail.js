import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Image, Pressable } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function ZurhaiScreen() {
  const [titleCard, settitleCard] = useState("Өнөөдрийн зурхай");
  const [textCard, settextCard] = useState("Өнөөдөр та өөрийн хийхийг хүсэж буй зүйлд ...");
  const changetext = (titleC, textC) => {
    settitleCard(titleC);
    settextCard(textC);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.i0}>
          <MaterialCommunityIcons style={styles.proicon} name="account-circle-outline"></MaterialCommunityIcons>
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
            <Text style={styles.zodhead}>{titleCard}</Text>
            <Text style={styles.zoddetail}>{textCard}</Text>
            <Text style={styles.line}>____________________________________________</Text>
            <Pressable onPress={() => {
            }}>
              <Text style={styles.ptext}>Дэлгэрэнгүй</Text>
            </Pressable>
          </View>
          <View style={styles.fview}>
            <View style={styles.vbuttons}>
              <Pressable onPress={() => changetext("Өнөөдрийн зурхай", "Өнөөдөр та өөрийн хийхийг хүсэж буй зүйлд ...")}>
                <View style={styles.vbutton}>
                  <Text style={styles.btext}>Ерөнхий</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => changetext("Маргаашийн зурхай", "B")}>
                <View style={styles.vbutton}>
                  <Text style={styles.btext}>Маргааш</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => changetext("5-р сарын зурхай", "Cобшцхбшхрцшбцхбүшгцүбнгүцгбүгүшыгбшчгнгхбабнанабннангнннгнгннгнг")}>
                <View style={styles.vthird}>
                  <Text style={styles.btext}>Сар</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.horosview}>
              <View style={styles.hordetail}>
                <Image source={require("../images/astrology.png")}
                  style={styles.ipic}></Image>
                <Text style={styles.hortitle}>Ордны зурхай</Text>
                <Text style={styles.hortext}>Таны ерөнхий шинж байдал</Text>
              </View>
              <View style={styles.hordetail}>
                <AntDesign style={styles.horicon} name='hearto'></AntDesign>
                <Text style={styles.hortitle}>Ордны зурхай</Text>
              </View>
              <View style={styles.hordetail}>
                <AntDesign style={styles.horicon} name='hearto'></AntDesign>
                <Text style={styles.hortitle}>Ордны зурхай</Text>
              </View>
              <View style={styles.hordetail}>
                <AntDesign style={styles.horicon} name='hearto'></AntDesign>
                <Text style={styles.hortitle}>Ордны зурхай</Text>
              </View>
            </View>
          </View>
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
  },
  vbuttons: {
    flexDirection: 'row',
    justifyContent: "space-around",
    margin: 30
  },
  vbutton: {
    height: 35,
    width: 125,
    borderRadius: 5,
    borderColor: "gainsboro",
    borderWidth: 1,
    backgroundColor: "#f3f7fb",
    justifyContent: "center",
    alignItems: "center"
  },
  vthird: {
    height: 35,
    width: 80,
    borderRadius: 5,
    borderColor: "gainsboro",
    borderWidth: 1,
    backgroundColor: "#f3f7fb",
    justifyContent: "center",
    alignItems: "center"
  },
  btext: {
    color: "#2C3333",
    fontSize: 15,
    fontWeight: "500",
  },
  horosview: {
    justifyContent: "center",
    alignItems: "center",
    width: 500
  },
  horicon: {
    fontSize: 30,
    color: "#FC7D8F"
  },
  hordetail: {
    flexDirection: 'row',
    width: 400,
    height: 100,
    justifyContent: "center",
  },
  hortitle: {
    fontSize: 20,
  },
  hortext: {
    fontSize: 15,
    paddingTop: 5,
    color: "gray",
  },
  ipic: {
    height: 45,
    width: 45,
  }
})