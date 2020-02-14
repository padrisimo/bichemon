import createDataContext from './createDataContext';
import pokeapi from '../api/pokeapi';

const bichosReducer = (state, action) => {
  switch (action.type) {
    case 'get_bichemon':
      return action.payload;
    default:
      return state;
  }
};

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
