import {
    SafeAreaView, Text, StyleSheet,
    StatusBar,
    Platform,
    ScrollView,
} from 'react-native'
import React, { useEffect } from 'react'
import { sendRequest, urlLookup } from '../settings/Settings'

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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
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
    scroll: {
        flex: 1,
    },
})