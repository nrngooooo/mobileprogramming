import {
    SafeAreaView, Text, StyleSheet,
    StatusBar,
    Platform,
} from 'react-native'
import React from 'react'

export default function AimagDetail({route,navigation}) {
    const {aimagname, aimagcode}=route.params
    return (
        <SafeAreaView style={styles.container}>
            <Text>{aimagname}</Text>
            <Text>{aimagcode}</Text>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
})