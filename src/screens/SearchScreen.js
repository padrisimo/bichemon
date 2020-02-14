import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import { Context } from '../context/BichosContext';
import BichosList from '../components/BichosList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, result, errorMessage] = useResults();
  const { state, getBichemonList } = useContext(Context);

  useEffect(() => {
    getBichemonList();
  }, []);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {state && state.results ? <BichosList results={state.results} /> : null}
    </>
  );
};

export default SearchScreen;
