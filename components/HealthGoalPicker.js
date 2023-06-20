import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HealthGoalPicker = ({ handleHealthGoalChange, healthGoal }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={healthGoal} onValueChange={(itemValue) => handleHealthGoalChange(itemValue)} itemStyle={styles.pickerItem}>
        <Picker.Item label="Lose weight" value="lose weight" />
        <Picker.Item label="Gain weight" value="gain weight" />
        <Picker.Item label="Maintain weigh" value="maintain weigh" />
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

export default HealthGoalPicker;
