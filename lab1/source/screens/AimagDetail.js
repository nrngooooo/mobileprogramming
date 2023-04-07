import {
    SafeAreaView, Text, StyleSheet,
    StatusBar,
    Platform,
} from 'react-native'
import React from 'react'

export default function AimagDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>AimagDetail</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
})