import React, { useState } from "react";
import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export default function App() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

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
    const message = `Age: ${age}\nGender: ${gender}\nHeight: ${height}\nWeight: ${weight}\nActivityLevel: ${activityLevel}\nHealthGoal: ${healthGoal}`;

    Alert.alert("Form Submitted", message);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
        maxLength={2}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={handleGenderChange}
        value={gender}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Activity level"
        onChangeText={handleActivityLevelChange}
        value={activityLevel}
      />
      <TextInput
        style={styles.input}
        placeholder="Health Goal"
        onChangeText={handleHealthGoalChange}
        value={healthGoal}
      />
      <View style={styles.switchContainer}>
        <Checkbox value={isAgreed} onValueChange={handleAgreedCheckboxChange} />
        <Text style={styles.switchText}>
          I understand the rules of the project and I'll do my best
        </Text>
      </View>
      <Button title="Submit" onPress={handleSubmit} disabled={!age || !gender || !height} />
    </View>
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
});