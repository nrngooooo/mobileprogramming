import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./source/screens/Home";
import Detail from "./source/screens/Detail";

const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Detail" component={Detail} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
