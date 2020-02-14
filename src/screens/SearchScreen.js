import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/BichosContext';

const SearchScreen = () => {
  const { navigate } = useNavigation();
  const { state, getBichemonList } = useContext(Context);

  useEffect(() => {
    getBichemonList();
  }, []);
  console.log(state);
  return (
    <View>
      <Text>search bichos</Text>
      <Button onPress={() => navigate('BichoShow')} title="ou yea!" />
    </View>
  );
};

export default SearchScreen;
