import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ActivityLevelPicker = ({ handleActivityLevelChange, activityLevel }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={activityLevel}
        onValueChange={(itemValue) => handleActivityLevelChange(itemValue)}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Lightly active" value="lightly active" />
        <Picker.Item label="Moderately active" value="moderately active" />
        <Picker.Item label="Very active" value="very active" />
        <Picker.Item label="Super active" value="super active" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  pickerItem: {
    textAlign: "center",
  },
});

export default ActivityLevelPicker;
