import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import FoodDatabaseService from '../services/FoodDatabaseService';
import MealPicker from '../components/MealPicker';
import DayPicker from '../components/DayPicker';

export default function FoodDatabase() {
  const [foodName, setFoodName] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");
  const [details, setDetails] = useState(null);
  const [meal, setMeal] = useState("Breakfast");
  const [mealDay, setMealDay] = useState("Monday");
  const [quantity, setQuantity] = useState("");
  const [showMealDayPicker, setShowMealDayPicker] = useState(false);
  const [showMealPicker, setShowMealPicker] = useState(false);
  const [mealPlan, setMealPlan] = useState({
    "Monday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Tuesday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Wednesday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Thursday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Friday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Saturday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    },
    "Sunday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": []
    }
  });

  const handleFoodNameChange = (foodName) => {
    setFoodName(foodName);
  };

  const handleSubmit = async () => {
    const foodList = await FoodDatabaseService.searchFood(foodName);
    setFoodList(foodList);
    setDetails(null);
    console.log(mealPlan);
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

  const handleMealDayChange = (mealDay) => {
    setMealDay(mealDay);
  };
  
  const updateMealPlan = () => {
    setMealPlan((prevMealPlan) => {
      const updatedMealPlan = { ...prevMealPlan };
      updatedMealPlan[mealDay][meal].push(selectedFood);
      return updatedMealPlan;
    });
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
              <Button  title="Select a day" onPress={() => setShowMealDayPicker(!showMealDayPicker)} />
              {showMealDayPicker && (
                <DayPicker 
                  handleMealDayChange={handleMealDayChange}
                  mealDay={mealDay}
                />
              )}
              <Button  title="Select a meal" onPress={() => setShowMealPicker(!showMealPicker)} />
              {showMealPicker && (
                <MealPicker
                  handleMealChange={handleMealChange}
                  meal={meal}
                />
              )}
              <Button title="Update Meal Plan" onPress={() => updateMealPlan(mealPlan)} disabled={!mealDay || !quantity || !meal} />
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
