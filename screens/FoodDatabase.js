import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import FoodDatabaseService from '../services/FoodDatabaseService';

export default function FoodDatabase() {
  const [foodName, setFoodName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [details, setDetails] = useState(null);

  const handleFoodNameChange = (foodName) => {
    setFoodName(foodName);
  };

  const handleSubmit = async () => {
    const data = await FoodDatabaseService.searchFoodData(foodName);
    setSuggestions(data);
    setDetails(null);
  };

  const handleSelectedFood = async (selectedFood) => {
    setSelectedFood(selectedFood);
    const details = await FoodDatabaseService.searchFoodDetails(selectedFood);
    setDetails(details);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search a food"
        onChangeText={handleFoodNameChange}
        value={foodName}
      />
      <Button title="Submit" onPress={handleSubmit} disabled={!foodName} />
      {/* si details alors on affiche les détails si non alors on laisse la liste de résultat de recherche */}
      {details ? (
        <View>
          <Text>{selectedFood} Details:</Text>
          <Text>Carbohydrates: {details.CHOCDF}g</Text>
          <Text>Energy: {details.ENERC_KCAL}kcal</Text>
          <Text>Total lipid: {details.FAT}g</Text>
          <Text>Fiber, total dietary: {details.FIBTG}g</Text>
          <Text>Protein: {details.PROCNT}g</Text>
        </View>
      ) : (
        <View>
          {suggestions.map((suggestion, index) => (
            <View key={index} style={styles.suggestionItem}>
              <Button title={suggestion} onPress={() => handleSelectedFood(suggestion)} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

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
  suggestionItem: {
    marginBottom: 5,
  },
});
