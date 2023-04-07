import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./source/screens/Home";
import Detail from "./source/screens/Detail";
import AimagDetail from "./source/screens/AimagDetail";
import AimagList from "./source/screens/AimagList";

const HomeStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AimagList"
      >
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Detail" component={Detail} />
        <HomeStack.Screen name="AimagList" component={AimagList} />
        <HomeStack.Screen name="AimagDetail" component={AimagDetail} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
