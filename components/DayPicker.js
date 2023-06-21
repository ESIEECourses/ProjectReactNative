import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DayPicker = ({ handleMealDayChange, mealDay }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={mealDay} onValueChange={(itemValue) => handleMealDayChange(itemValue)} itemStyle={styles.pickerItem}>
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 8,
  },
  pickerItem: {
    textAlign: "center",
  },
});

export default DayPicker;
