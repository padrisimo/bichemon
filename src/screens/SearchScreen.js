import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import { Context } from '../context/BichosContext';
import BichosList from '../components/BichosList';

// todo modal errorMessage
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, result, errorMessage] = useResults();
  const { state, getBichemonList } = useContext(Context);
  const { navigate } = useNavigation();

  useEffect(() => {
    getBichemonList();
  }, []);

  useEffect(() => {
    if (!result) return;
    navigate('Bicho', { name: result.name, id: result.id });
  }, [result]);

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {state && state.results ? <BichosList results={state.results} /> : null}
    </>
  );
};

export default SearchScreen;
