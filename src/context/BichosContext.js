import axios from 'axios';
import createDataContext from './createDataContext';
import pokeapi from '../api/pokeapi';

// todo create case and action for error handling
const bichosReducer = (state, action) => {
  switch (action.type) {
    case 'get_bichemon':
      return action.payload;
    case 'get_more_bichemon':
      return {
        ...state,
        results: [...state.results, action.payload.results],
        next: action.payload.next
      };
    default:
      return state;
  }
};

// todo try catch and handle api error
const getBichemonList = dispatch => {
  return async () => {
    const response = await pokeapi.get('/pokemon');
    dispatch({ type: 'get_bichemon', payload: response.data });
  };
};

// todo extract this logic to api service
const loadMoreBichos = dispatch => {
  return async url => {
    const response = await axios.get(url);
    dispatch({ type: 'get_more_bichemon', payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  bichosReducer,
  { getBichemonList, loadMoreBichos },
  []
);
