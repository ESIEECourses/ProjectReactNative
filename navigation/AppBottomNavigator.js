import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealPlanning from "../screens/MealPlanning";
import FoodDatabase from "../screens/FoodDatabase";
import HealthGoals from '../screens/HealthGoals';

const Tab = createBottomTabNavigator();

const AppBottomNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Meal Planning" component={MealPlanning} />
        <Tab.Screen name="Food" component={FoodDatabase} />
        <Tab.Screen name="Health Goals" component={HealthGoals} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppBottomNavigator;
