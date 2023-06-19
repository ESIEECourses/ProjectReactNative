import React , { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import FoodDatabaseService from '../services/FoodDatabaseService';

export default function FoodDatabase() {
  const [foodName, setFoodName] = useState("");

  const handleFoodNameChange = (foodName) => {
    setFoodName(foodName);
  };

  const handleSubmit = async () => {
    await FoodDatabaseService.searchFoodData(foodName);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search a food"
        onChangeText={handleFoodNameChange}
        value={foodName}
      />
      <Button title="Submit" onPress={handleSubmit} disabled={!foodName} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});