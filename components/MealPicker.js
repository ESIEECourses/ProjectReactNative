import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const MealPicker = ({ handleMealChange, gender }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={gender} onValueChange={(itemValue) => handleMealChange(itemValue)} itemStyle={styles.pickerItem}>
        <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Snack" value="snack" />
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

export default MealPicker;
