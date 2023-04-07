import {
    SafeAreaView, Text, StyleSheet,
    StatusBar,
    Platform,
    ScrollView,
    FlatList,
    View,
    Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { sendRequest, urlLookup } from '../settings/Settings'
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


export default function AimagList() {
    const [aimagData, setData] = useState();
    useEffect(() => {
        const body = { action: "aimagsum" };
        sendRequest(urlLookup, body)
            .then((data) => {
                setData(data); // aimagData = data
                // console.log(data, "1");
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const DATA = aimagData.data

    const Item = ({ title }) => (
        <Pressable onPress={()=>{console.log({title})}}>
        <View style={styles.item}>
            <View style={styles.itemv0}>
                <Ionicons name="home" color='green' size={20}></Ionicons>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.itemv1}>
                <FontAwesome5 name="arrow-right" color="orange"></FontAwesome5>
            </View>
        </View>
        </Pressable>
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.aimagname} />}
                    keyExtractor={item => item.aimagcode}
                />
                <Text>{JSON.stringify(aimagData)}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    item: {
        backgroundColor: 'white',
        padding: 5,
        height: 40,
        justifyContent: "center",
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },
    itemv0: {
        flexDirection: "row",
        alignItems: "center",
        flex: 4,
    },
    itemv1: {
        flexDirection: "row",
        alignItems: "flex-end",
        flex: 1,
        marginLeft: 230,
    }
})