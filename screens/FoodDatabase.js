import React, { useState,useContext  } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import FoodDatabaseService from '../services/FoodDatabaseService';
import MealPicker from '../components/MealPicker';
import DayPicker from '../components/DayPicker';
import { MealPlanContext } from '../contexts/MealPlanContext.js';

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
  const { mealPlan, setMealPlan } = useContext(MealPlanContext);
  

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
      for(let i = 0; i < quantity; i++){
        updatedMealPlan[mealDay][meal].push(selectedFood);
        updatedMealPlan[mealDay]["totalCalories"] += details.ENERC_KCAL;
      }
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
              <Text style={styles.title}>{selectedFood} Details:</Text>
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
              <TouchableOpacity style={styles.button} onPress={() => setShowMealDayPicker(!showMealDayPicker)}>
                <Text>Select a day</Text>
              </TouchableOpacity>
              {showMealDayPicker && (
                <DayPicker 
                  handleMealDayChange={handleMealDayChange}
                  mealDay={mealDay}
                />
              )}
              <TouchableOpacity style={styles.button} onPress={() => setShowMealPicker(!showMealPicker)}>
                <Text>Select a meal</Text>
              </TouchableOpacity>
              {showMealPicker && (
                <MealPicker
                  handleMealChange={handleMealChange}
                  meal={meal}
                />
              )}
              <Button title="Add to Meal Plan" onPress={updateMealPlan} disabled={!mealDay || !quantity || !meal} />
            </View>
          )}
        </View>
      ) : (
        <View>
          {foodList.map((food, index) => (
            <View key={index} >
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});