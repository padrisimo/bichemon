import React from 'react';
import { FlatList } from 'react-native';
import BichoTumb from './BichoTumb';

const BichosList = ({ results, loadMoreBichos }) => {
  if (!results.length) {
    return null;
  }

  return (
    <FlatList
      data={results}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <BichoTumb result={item} id={index + 1} />}
      onEndReachedThreshold={0.5}
      onEndReached={loadMoreBichos}
    />
  );
};

export default BichosList;
