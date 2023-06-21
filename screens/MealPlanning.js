import React, { useState,useContext  } from 'react';
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { MealPlanContext } from '../contexts/MealPlanContext.js';

export default function MealPlanning() {
  const { mealPlan, setMealPlan } = useContext(MealPlanContext);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Monday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Monday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Monday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Monday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Monday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Monday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Tuesday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Tuesday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Tuesday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Tuesday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Tuesday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Tuesday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Wednesday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Wednesday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Wednesday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Wednesday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Wednesday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Wednesday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Thursday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Thursday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Thursday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Thursday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Thursday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Thursday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Friday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Friday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Friday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Friday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Friday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Friday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Saturday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Saturday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Saturday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Saturday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Saturday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Saturday.totalCalories} kcal </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Sunday</Text>
        <View>
          <Text>Breakfast : {mealPlan.Sunday.Breakfast.join(', ')} </Text>
        </View>
        <View>
          <Text>Lunch : {mealPlan.Sunday.Lunch.join(', ')} </Text>
        </View>
        <View>
          <Text>Dinner : {mealPlan.Sunday.Dinner.join(', ')} </Text>
        </View>
        <View>
          <Text>Snack : {mealPlan.Sunday.Snack.join(', ')} </Text>
        </View>
        <View>
          <Text>Daily calories : {mealPlan.Sunday.totalCalories} kcal </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});