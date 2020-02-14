import { useState } from 'react';
import pokeapi from '../api/pokeapi';

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await pokeapi.get(`/pokemon/${searchTerm}`);

      setResult(response.data);
    } catch (error) {
      setErrorMessage("Can't find pokemon :(");
    }
  };

  return [searchApi, result, errorMessage];
};
