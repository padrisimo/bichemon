import axios from 'axios';
import createDataContext from './createDataContext';
import pokeapi from '../api/pokeapi';
import { ERROR_MSG } from '../constants';

// todo create case and action for error handling
const bichosReducer = (
  state = {
    error: null,
    loading: true
  },
  action
) => {
  switch (action.type) {
    case 'get_bichemon':
      return { ...state, loading: false, ...action.payload };
    case 'get_more_bichemon':
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        next: action.payload.next
      };
    case 'get_bichemon_error':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

// todo try catch and handle api error
const getBichemonList = dispatch => {
  return async () => {
    try {
      const response = await pokeapi.get('/pokemon');
      dispatch({ type: 'get_bichemon', payload: response.data });
    } catch (error) {
      dispatch({ type: 'get_bichemon_error', payload: ERROR_MSG });
    }
  };
};

// todo extract this logic to api service
const loadMoreBichos = dispatch => {
  return async url => {
    if (!url) return;
    const response = await axios.get(url);
    dispatch({ type: 'get_more_bichemon', payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  bichosReducer,
  { getBichemonList, loadMoreBichos },
  []
);
