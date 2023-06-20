import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import FoodDatabaseService from '../services/FoodDatabaseService';
import MealPicker from '../components/MealPicker';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FoodDatabase() {
  const [foodName, setFoodName] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [details, setDetails] = useState(null);
  const [meal, setMeal] = useState("breakfast");
  const [quantity, setQuantity] = useState("");
  const [mealDate, setMealDate] = useState(new Date());

  const handleFoodNameChange = (foodName) => {
    setFoodName(foodName);
  };

  const handleSubmit = async () => {
    const foodList = await FoodDatabaseService.searchFood(foodName);
    setFoodList(foodList);
    setDetails(null);
  };

  const handleSelectedFood = async (selectedFood) => {
    setSelectedFood(selectedFood);
    const details = await FoodDatabaseService.searchFoodDetails(selectedFood);
    setDetails(details);
  };

  const handleMealChange = (meal) => {
    console.log(meal);
    setMeal(meal);
  };

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity.toString());
  };

  const handleMealDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setMealDate(currentDate);
  };
  const updateMealPlan = () => {
    
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          {details == 'Aucune donnée' ? (
            <Text>Aucune données</Text>
          ) : (
            <View>
              <Text>{selectedFood} Details:</Text>
              <Text>Carbohydrates: {details.CHOCDF}g</Text>
              <Text>Energy: {details.ENERC_KCAL}kcal</Text>
              <Text>Total lipid: {details.FAT}g</Text>
              <Text>Fiber, total dietary: {details.FIBTG}g</Text>
              <Text>Protein: {details.PROCNT}g</Text>

              <TextInput
                style={styles.input}
                placeholder="Quantity"
                onChangeText={handleQuantityChange}
                value={quantity}
                keyboardType="numeric"
                maxLength={2}
              />
              <DateTimePicker
                value={mealDate}
                mode="date"
                onChange={handleMealDateChange}
                minimumDate={new Date()}
              />
              <MealPicker
                handleMealChange={handleMealChange}
                meal={meal}
              />
              <Button title="Update Meal Plan" onPress={updateMealPlan} disabled={!mealDate || !quantity || !meal} />
            </View>
          )}
        </View>
      ) : (
        <View>
          {foodList.map((food, index) => (
            <View key={index} >
              {/* <Button title={food} onPress={} /> */}
              <TouchableOpacity style={styles.button} onPress={() => handleSelectedFood(food)}>
                <Text>{food}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 5
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
