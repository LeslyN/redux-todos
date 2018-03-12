import { createStore, combineReducers } from 'redux';

import AppReducer from './reducer';

// definiendo reducir, osea funcion reductora, recibe el estado actual y la acción
const rootReducer = combineReducers({
  // aqui van las entradas
  AppReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// exporta la función reductora
// create store recibe el parametro estado inicial
export default store;