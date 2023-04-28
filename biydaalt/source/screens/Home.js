import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { Octicons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


export default function Calendar() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.head0}>
        <View style={styles.i0}>
          <Ionicons style={styles.headicon} name="person-circle-outline"></Ionicons>
          </View>
          <View style={styles.i1}>
          <Octicons style={styles.headicon} name="calendar"></Octicons>
          <MaterialCommunityIcons style={styles.headicon} name="bell-outline"></MaterialCommunityIcons>
          </View>     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  head0: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headicon: {
    fontSize: 28,
  },
  i0: {
    flex: 9,
  },
  i1:{
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 3,
  }
});
