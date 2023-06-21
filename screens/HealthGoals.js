import React, { useState } from "react";
import { View, TextInput, Text, Button, Alert, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import GenderPicker from "../components/GenderPicker";
import ActivityLevelPicker from "../components/ActivityLevelPicker";
import HealthGoalPicker from "../components/HealthGoalPicker";

export default function App() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [healthGoal, setHealthGoal] = useState("lose weight");
  const [isAgreed, setIsAgreed] = useState(false);
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [showActivityLevelPicker, setShowActivityLevelPicker] = useState(false);
  const [showHealthGoalPicker, setShowHealthGoalPicker] = useState(false);

  const handleAgeChange = (age) => {
    setAge(age.toString());
  };

  const handleGenderChange = (gender) => {
    setGender(gender);
  };

  const handleHeightChange = (height) => {
    setHeight(height);
  };

  const handleWeightChange = (weight) => {
    setWeight(weight);
  };

  const handleActivityLevelChange = (activityLevel) => {
    setActivityLevel(activityLevel);
  };

  const handleHealthGoalChange = (healthGoal) => {
    setHealthGoal(healthGoal);
  };

  const handleAgreedCheckboxChange = (value) => {
    setIsAgreed(value);
  };

  const handleSubmit = () => {
    if (!age || !gender || !height || !weight || !activityLevel || !healthGoal) {
      Alert.alert("Error", "All the informations must be registered before submitting");
      return;
    }
    if (!isAgreed) {
      Alert.alert("Error", "You must agree to the rules before submitting");
      return;
    }

    // If all validations pass, display the form information
    console.log("BMR : " + calculateBMR());
    // const message = `BMR: ${calculateBMR()}`;
    Alert.alert(`BMR = ${Math.round(calculateBMR())} cal`);
  };

  const calculateBMR = () => {
    let BMR;
    if(gender==='male'){
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
    else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    switch (activityLevel){
      case 'sedentary':
        BMR *= 1.2;
        break;
      case 'lighlty active':
        BMR *= 1.375;
        break;
      case 'moderatly':
        BMR *= 1.55;
        break;
      case 'very active':
        BMR *= 1.725;
        break;
      case 'super active':
        BMR *= 1.9;
        break;
    }
    switch (healthGoal){
      case 'gain weight':
        BMR += BMR*0.1;
        break;
      case 'lose weight':
        BMR -= BMR*0.1;
        break;
      default:
        break;
    }
    return BMR;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
        maxLength={2}
      />
      <Button  title="Gender" onPress={() => setShowGenderPicker(!showGenderPicker)} />
      {showGenderPicker && (
        <GenderPicker
          handleGenderChange={handleGenderChange}
          gender={gender}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Height"
        onChangeText={handleHeightChange}
        value={height}
        keyboardType="numeric"
        maxLength={3}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight"
        onChangeText={handleWeightChange}
        value={weight}
        keyboardType="numeric"
        maxLength={3}
      />
      <Button  title="Activity level" onPress={() => setShowActivityLevelPicker(!showActivityLevelPicker)} />
      {showActivityLevelPicker && (
        <ActivityLevelPicker
          handleActivityLevelChange={handleActivityLevelChange}
          activityLevel={activityLevel}
        />
      )}
      <Button  title="Health goal" onPress={() => setShowHealthGoalPicker(!showHealthGoalPicker)} />
      {showHealthGoalPicker && (
        <HealthGoalPicker
          handleHealthGoalChange={handleHealthGoalChange}
          healthGoal={healthGoal}
        />
      )}
      <View style={styles.switchContainer}>
        <Checkbox value={isAgreed} onValueChange={handleAgreedCheckboxChange} />
        <Text style={styles.switchText}>
          I agree to share those data with the application
        </Text>
      </View>
      <Button title="Submit" onPress={handleSubmit} disabled={!age || !gender || !height} />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: {
    marginLeft: 10,
  },
  pickerItem: {
    textAlign: "center",
  },
});