import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from './source/screens/Home';
import ZurhaiScreen from './source/screens/Detail';
import BusadScreen from './source/screens/Other';
import ZahialgaScreen from './source/screens/Order';

function HomeStackNavigation(){
  const HomeStack = createNativeStackNavigator();

  return(

    <HomeStack.Navigator
      screenOptions={{
      headerShown:false,
      }}
        initialRouteName="Calendar"
      >
        <HomeStack.Screen name="Calendar" component={HomeScreen} />
        <HomeStack.Screen name="Horos" component={ZurhaiScreen} />
        <HomeStack.Screen name="Order" component={ZahialgaScreen} />
        <HomeStack.Screen name="Other" component={BusadScreen} />
      </HomeStack.Navigator>

  )
}
function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn ==="Календар") {
              iconName = focused ? 'calendar-today' : 'calendar-today';

            } else if (rn === "Зурхай") {
              iconName = focused ? 'book' : 'book';

            } else if (rn === "Захиалга") {
              iconName = focused ? 'bookmark-outline' : 'bookmark-outline';

            } else if (rn === "Бусад") {
              iconName = focused ? 'view-headline' : 'view-headline';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          headerShown:false,
          tabBarStyle: {
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fb9084",
          tabBarInactiveTintColor: "grey",
          tabBarlabelStyle: {
            fontWeight: "bold",
          },
        })}>

        <Tab.Screen name="Календар" component={HomeStackNavigation} />
        <Tab.Screen name="Зурхай" component={ZurhaiScreen} />
        <Tab.Screen name="Захиалга" component={ZahialgaScreen} />
        <Tab.Screen name="Бусад" component={BusadScreen} />

      </Tab.Navigator>
      </NavigationContainer>
  );
}

export default BottomTabNavigation;