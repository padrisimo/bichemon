import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>search bichos</Text>
      <Button onPress={() => navigate('ResultsShow')} title="ou yea!" />
    </View>
  );
};

export default SearchScreen;
