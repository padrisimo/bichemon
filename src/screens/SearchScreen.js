import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import { Context } from '../context/BichosContext';
import BichosList from '../components/BichosList';
import ErrorModal from '../components/ErrorModal';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, result, errorMessage, clearErrorMessage] = useResults();
  const { state, getBichemonList } = useContext(Context);
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

  return (
    <>
      <ErrorModal errorMessage={errorMessage} clearErrorMessage={clearErrorMessage} />
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={handleSubmit} />
      {state && state.results ? <BichosList results={state.results} /> : null}
    </>
  );
};

export default SearchScreen;
