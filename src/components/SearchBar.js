import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        style={styles.textInput}
        onChangeText={onTermChange}
        value={term}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 50,
    margin: 15,
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  icon: {
    fontSize: 30,
    alignSelf: 'center',
    marginRight: 15
  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
