import createDataContext from './createDataContext';
import pokeapi from '../api/pokeapi';

// todo create case and action for error handling
const bichosReducer = (state, action) => {
  switch (action.type) {
    case 'get_bichemon':
      return action.payload;
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

export const { Context, Provider } = createDataContext(
  bichosReducer,
  { getBichemonList },
  []
);
