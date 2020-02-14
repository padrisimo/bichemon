import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/BichosContext';
import BichosList from '../components/BichosList';

const SearchScreen = () => {
  const { state, getBichemonList } = useContext(Context);

  useEffect(() => {
    getBichemonList();
  }, []);
  console.log(state);
  return (
    <>
      {state && state.results ? <BichosList results={state.results} /> : null}
    </>
  );
};

export default SearchScreen;
