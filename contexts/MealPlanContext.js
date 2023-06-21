import React, { createContext, useState } from 'react';

const MealPlanContext = createContext();

const MealPlanProvider = ({ children }) => {
  const [mealPlan, setMealPlan] = useState({
    "Monday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Tuesday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Wednesday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Thursday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Friday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Saturday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    },
    "Sunday": {
      "Breakfast": [],
      "Lunch": [],
      "Snack": [],
      "Dinner": [],
      "totalCalories": 0
    }
  });

  return (
    <MealPlanContext.Provider value={{ mealPlan, setMealPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
};

export { MealPlanContext, MealPlanProvider };
