import React from 'react';
import AppBottomNavigator from './navigation/AppBottomNavigator';
import { MealPlanProvider } from './contexts/MealPlanContext.js';

const App = () => {
  return (
    <MealPlanProvider>
      <AppBottomNavigator />
    </MealPlanProvider>
  );
};

export default App;