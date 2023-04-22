import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Calendar() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text
            style={styles.statictxt}
          >
            Welcome to my personal app :D
          </Text>
          <Image
            source={require("../images/Lee_Jong-suk_March_2018.png")}
            style={styles.zurg1}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  statictxt: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  box1: {
    height: 600,
    width: 400,
    borderRadius: 20,
    margin: 20,
    color: "white",
  },
  zurg1: {
    width: 300,
    height: 500,
  },
});
