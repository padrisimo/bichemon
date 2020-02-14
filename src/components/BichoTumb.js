import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PICS_URI } from '../constants';

const BichoTumb = ({ result, id }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('Bicho', { name: result.name })}>
      <View style={styles.container}>
        <Text style={styles.name}>{result.name}</Text>
        <Image
          source={{
            uri: `${PICS_URI}${id}.png`
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  name: {
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default BichoTumb;
