import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Image, Pressable } from 'react-native';
import { Octicons, Ionicons, MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function ZurhaiScreen() {
  const [titleCard, settitleCard] = useState("Өнөөдрийн зурхай");
  const [selectedItem, setSelectedItem] = useState(null);
  const [textCard, settextCard] = useState("Өнөөдөр та өөрийн хийхийг хүсэж буй зүйлд ...");
  const changetext = (titleC, textC, item) => {
    settitleCard(titleC);
    settextCard(textC);
    setSelectedItem(item);
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
              <Pressable style={[styles.vbutton, selectedItem === 'Ерөнхий' && styles.selected]} onPress={() => changetext("Өнөөдрийн зурхай", "Өнөөдөр та өөрийн хийхийг хүсэж буй зүйлд ...")}>
                <Text style={[styles.btext, selectedItem === 'Ерөнхий' && styles.selectedText]} > Ерөнхий</Text>
              </Pressable>
              <Pressable style={[styles.vbutton, selectedItem === 'Маргааш' && styles.selected]} onPress={() => changetext("Маргаашийн зурхай", "B")}>
                <Text style={[styles.btext, selectedItem === 'Маргааш' && styles.selectedText]}>Маргааш</Text>
              </Pressable>
              <Pressable style={[styles.vthird, selectedItem === 'Сар' && styles.selected]} onPress={() => changetext("5-р сарын зурхай", "Cобшцхбшхрцшбцхбүшгцүбнгүцгбүгүшыгбшчгнгхбабнанабннангнннгнгннгнг")}>
                <Text style={[styles.btext, selectedItem === 'Сар' && styles.selectedText]}>Сар</Text>

              </Pressable>
            </View>
            <View style={styles.horosview}>
              <View style={styles.hordetail}>
                <View style={styles.iview}>
                  <Image source={require("../images/astrology.png")}
                    style={styles.ipic}></Image>
                </View>
                <View style={styles.horview}>
                  <Text style={styles.hortitle}>Ордны зурхай</Text>
                  <Text style={styles.hortext}>{`Таны ерөнхий шинж 
байдал`}</Text>
                </View>
                <Text style={styles.hline}>_______________________________________________</Text>
              </View>
              <View style={styles.hordetail}>
                <View style={styles.iview}>
                  <Image source={require("../images/heart.png")}
                    style={styles.ipic}></Image>
                </View>
                <View style={styles.horview}>
                  <Text style={styles.hortitle}>Хайрын зурхай</Text>
                  <Text style={styles.hortext}>{`Таны ерөнхий шинж 
байдал`}</Text>
                </View>
                <Text style={styles.hline}>_______________________________________________</Text>
              </View>
              <View style={styles.hordetail}>
                <View style={styles.iview}>
                  <Image source={require("../images/happy.png")}
                    style={styles.ipic}></Image>
                </View>
                <View style={styles.horview}>
                  <Text style={styles.hortitle}>Нөхөрлөл</Text>
                  <Text style={styles.hortext}>{`Таны ерөнхий шинж 
байдал`}</Text>
                </View>
                <Text style={styles.hline}>_______________________________________________</Text>
              </View>
              <View style={styles.hordetail}>
                <View>
                  <Image source={require("../images/dollar.png")}
                    style={styles.dollarpic}></Image>
                </View>
                <View style={styles.horview}>
                  <Text style={styles.hortitle}>Ажил карьер, мөнгө</Text>
                  <Text style={styles.hortext}>{`Таны ерөнхий шинж 
байдал`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView >
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
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
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
    width: 500,
    justifyContent: "space-between",
  },
  hline: {
    color: "gainsboro",
  },
  horicon: {
    fontSize: 30,
    color: "#FC7D8F"
  },
  hordetail: {
    flexDirection: 'row',
    flexWrap: "wrap",
    width: 400,
    height: 90,
  },
  horview: {
    marginLeft: 25,
  },
  hortitle: {
    fontSize: 16,
  },
  hortext: {
    fontSize: 14,
    color: "gray",
  },
  iview: {
    justifyContent: "center",
  },
  ipic: {
    height: 40,
    width: 40,
  },
  dollarpic: {
    height: 40,
    width: 40,
    marginTop: 10,
  },
  selected: {
    backgroundColor: '#FC7D8F',
  },
  selectedText: {
    color: 'white',
  },
})