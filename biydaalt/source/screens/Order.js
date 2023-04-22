import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform,StatusBar } from 'react-native';

export default function ZahialgaScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View >
          <Text>ZahialgaScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
})