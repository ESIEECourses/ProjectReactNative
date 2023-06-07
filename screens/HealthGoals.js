import React from 'react';
import { View, Text, Button } from 'react-native';

const HealthGoals = ({ navigation }) => {
  const goToDetails = () => {
    navigation.navigate('Details', { titre: 'Titre détail test' });
  };

  return (
    <View>
      <Text>Welcome to the Health goals Screen!</Text>
    </View>
  );
};

HealthGoals.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: 'blue',
  },
  headerTintColor: 'white',
};

export default HealthGoals;
