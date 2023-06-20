import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const GenderPicker = ({ handleGenderChange, gender }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={gender} onValueChange={(itemValue) => handleGenderChange(itemValue)} itemStyle={styles.pickerItem}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
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

export default GenderPicker;
