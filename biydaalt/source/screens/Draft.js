import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {};
  markedDates[selectedDate] = { selected: true, backgroundColor: 'green' };

  const renderItem = ({ item }) => {
    const date = new Date(item.dateString);
    const isToday = item.dateString === selectedDate;
    return (
      <TouchableOpacity
        onPress={() => handleDayPress(item)}
        style={[styles.dateContainer, isToday && { backgroundColor: 'green' }]}
      >
        <Text style={[styles.dateText, isToday && { color: 'white' }]}>{date.getDate()}</Text>
      </TouchableOpacity>
    );
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + i);
    return { day: date.toLocaleDateString('en-US', { weekday: 'short' }), dateString: date.toISOString().split('T')[0] };
  });

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={weekDays}
        keyExtractor={(item) => item.dateString}
        renderItem={renderItem}
      />
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
