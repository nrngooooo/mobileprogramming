import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BusadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['white', '#f8d2d7']}
        style={styles.background}>
        <Pressable style={styles.bview} onPress={() => { }}>
          <Text style={styles.btext}>Бидний тухай</Text>
        </Pressable>
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bview: {
    marginBottom: 100,
    borderWidth: 2,
    borderColor: "#FC7D8F",
    width: 200,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  btext: {
    fontSize: 18,
    color: "#FC7D8F",
    fontWeight: "bold"
  },
})