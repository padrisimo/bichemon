import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Audio } from 'expo-av';

import pokeapi from '../api/pokeapi';
import { PICS_URI, CRY_URL } from '../constants';

const BichoScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async query => {
    const response = await pokeapi.get(`/pokemon/${query}`);
    setResult(response.data);
  };

  const playbackObject = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject
        .loadAsync(
          {
            uri: `${CRY_URL + id}.mp3`
          },
          { shouldPlay: true, androidImplementation: 'MediaPlayer' }
        )
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Audio.setAudioModeAsync({
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: true
    });
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.weight}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: `${PICS_URI + id}.png` }} />
      <Button title="play cry" onPress={playbackObject} />
    </View>
  );
};

export default BichoScreen;
