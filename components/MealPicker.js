import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const MealPicker = ({ handleMealChange, meal }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={meal} onValueChange={(itemValue) => handleMealChange(itemValue)} itemStyle={styles.pickerItem}>
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Lunch" value="Lunch" />
        <Picker.Item label="Dinner" value="Dinner" />
        <Picker.Item label="Snack" value="Snack" />
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
