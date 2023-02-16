import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable
} from "react-native";

export default function App() {
  const callAlert = () => {
    alert("Button clicked one");
    alert("Button clicked two");
  };

  return (
    <SafeAreaView style={helberjuulelt.container}>
      <ScrollView style={helberjuulelt.scrollView}>
        <Button
          title="Click Me"
          color="#FFFFFF"
          onPress={() => {
            callAlert();
          }}
        ></Button>

        <Text style={helberjuulelt.goliinText1}>Миний анхны апп!</Text>
        <Text style={helberjuulelt.goliinText2}>Миний анхны апп!</Text>
        <Text style={helberjuulelt.goliinText3}>Миний анхны апп!</Text>
        <Pressable
          onPress={() => alert("onpress")}
          onLongPress={() => alert("onlongpress")}
        >
          <Image
            source={require("./assets/favicon.png")}
            style={helberjuulelt.image}
          ></Image>
        </Pressable>
        <Button onPress={() => alert("Button pressed")} title="Learn More" />
        <TextInput
          style={helberjuulelt.textInputUsername}
          placeholder="Хэрэглэчийн нэр оруулааарай"
        />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const helberjuulelt = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    backgroundColor: "black",
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  goliinText1: {
    fontWeight: 200,
    fontSize: 100,
    color: "white",
  },
  goliinText2: {
    fontWeight: 300,
    fontSize: 72,
    color: "white",
  },
  goliinText3: {
    fontWeight: 400,
    fontSize: 40,
    color: "white",
  },
  image: { height: 1300, width: 200 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInputUsername: {
    borderWidth: 1,
    color: "#735284",
  },
});