import React from 'react';
import { FlatList } from 'react-native';
import BichoTumb from './BichoTumb';

const BichosList = ({ results }) => {
  if (!results.length) {
    return null;
  }

  return (
    <FlatList
      data={results}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={result => result.name}
      renderItem={({ item, index }) => <BichoTumb result={item} id={index + 1} />}
    />
  );
};

export default BichosList;
