import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React from 'react'
const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: 'red' }]} />
);
const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});

export default function Tabs() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Дэлгэрэгүй' },
        { key: 'second', title: 'Тайлбар' },
        { key: 'third', title: 'Бүлэг' },

    ]);
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <Text>Tabs</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                style={{height:400,}}
            />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})