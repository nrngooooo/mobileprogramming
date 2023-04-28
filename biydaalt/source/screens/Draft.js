import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity,Text,SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {};
  markedDates[selectedDate] = { selected: true, backgroundColor: 'green' };

  const renderItem = ({ item }) => {
    const date = item.dateString;
    const isToday = date === selectedDate;
    return (
      <TouchableOpacity
        onPress={() => handleDayPress(item)}
        style={[styles.dateContainer, isToday && { backgroundColor: 'green' }]}
      >
        <Text style={[styles.dateText, isToday && { color: 'white' }]}>{item.day}</Text>
      
        <Text style={[styles.dateText, isToday && { color: 'white' }]}>{item.udur}</Text>
      </TouchableOpacity>
    );
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    const dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 0; // Sunday is 0, Monday is 1, etc.
    const diff = dayOfWeek - i < 0 ? dayOfWeek - i + 7 : dayOfWeek - i;
    date.setDate(date.getDate() - diff);
    return {
      day: date.toLocaleDateString('mn-MN', { weekday: 'short' }).substring(12,14),
      udur: date.toLocaleDateString('mn-MN', { weekday: 'short' }).substring(8,10),
      dateString: date.toISOString().split('T')[0],
    };
  });
  

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container1}>
      <FlatList
        horizontal
        data={weekDays}
        // keyExtractor={(item) => item.dateString}
        renderItem={renderItem}
      />
      {/* <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
      /> */}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  container1: {
    
    backgroundColor: '#fff',
    paddingTop: 30,
    height: 150
  },
  dateContainer: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeekCalendar;
