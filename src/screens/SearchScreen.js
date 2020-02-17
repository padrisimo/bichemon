import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import { Context } from '../context/BichosContext';
import BichosList from '../components/BichosList';
import ErrorModal from '../components/ErrorModal';
import ApiFallMsg from '../components/ApiFallMsg';
import Spinner from '../components/Spinner';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, result, errorMessage, clearErrorMessage] = useResults();
  const { state, getBichemonList, loadMoreBichos } = useContext(Context);
  const { navigate } = useNavigation();

  useEffect(() => {
    getBichemonList();
  }, []);

  useEffect(() => {
    if (!result) return;
    navigate('Bicho', { name: result.name, id: result.id });
  }, [result]);

  const handleSubmit = () => {
    if (!term) return;
    searchApi(term);
    setTerm('');
  };
  if (!state || state.loading) {
    return <Spinner />;
  }
  return (
    <>
      <StatusBar hidden />
      <ErrorModal errorMessage={errorMessage} clearErrorMessage={clearErrorMessage} />
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={handleSubmit} />
      {state && state.error ? <ApiFallMsg error={state.error} /> : null}
      {state && state.results ? (
        <BichosList results={state.results} loadMoreBichos={() => loadMoreBichos(state.next)} />
      ) : null}
    </>
  );
};

export default SearchScreen;
