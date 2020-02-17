import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
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
      await soundObject.loadAsync(
        { uri: `${CRY_URL + id}.mp3` },
        { shouldPlay: true, androidImplementation: 'MediaPlayer' }
      );
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
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.image} source={{ uri: `${PICS_URI + id}.png` }} />
        <Text style={styles.text}>
          weith: {result.weight}lb - height: {result.height}ft
        </Text>
        <Text style={styles.text}>num of moves: {result.moves.length}</Text>
        <Text style={styles.text}>base EXP: {result.base_experience}</Text>
        <Text style={styles.text}>
          type: {result.types.length < 1 ? 'hybrid' : result.types[0].type.name}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        data={result.stats}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.stat.name}: {item.base_stat}
          </Text>
        )}
        keyExtractor={item => item.stat.name}
      />
      <TouchableOpacity style={styles.buttonCry} onPress={playbackObject}>
        <Text style={{ fontSize: 18 }}> Play Cry Sound</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 30
  },
  buttonCry: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: 25
  }
});

export default BichoScreen;
