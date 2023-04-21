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

//Screen names
const homeName = "Календар";
const zurhaiName = "Зурхай";
const zahialgaName = "Захиалга";
const otherName = "Бусад";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'calendar-today' : 'calendar-today';

            } else if (rn === zurhaiName) {
              iconName = focused ? 'book' : 'book';

            } else if (rn === zahialgaName) {
              iconName = focused ? 'bookmark-outline' : 'bookmark-outline';

            } else if (rn === otherName) {
              iconName = focused ? 'view-headline' : 'view-headline';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fb9084',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={zurhaiName} component={ZurhaiScreen} />
        <Tab.Screen name={zahialgaName} component={ZahialgaScreen} />
        <Tab.Screen name={otherName} component={BusadScreen} />

      </Tab.Navigator>
      <HomeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Календар"
      >
        <HomeStack.Screen name="Календар" component={HomeScreen} />
        <HomeStack.Screen name="Зурхай" component={ZurhaiScreen} />
        <HomeStack.Screen name="Захиалга" component={ZahialgaScreen} />
        <HomeStack.Screen name="Бусад" component={BusadScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;