import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import pokeapi from '../api/pokeapi';
import { SHINI_URI } from '../constants';

const BichoScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  console.log(result);

  const getResult = async query => {
    const response = await pokeapi.get(`/pokemon/${query}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.weight}</Text>
      <Image style={{ width: 300, height: 200 }} source={{ uri: `${SHINI_URI + id}.png` }} />
    </View>
  );
};

export default BichoScreen;
