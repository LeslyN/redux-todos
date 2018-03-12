import { createStore } from 'redux';

// definiendo reducir, osea funcion reductora, recibe el estado actual y la acción
const reducer = (state, action) => {

  return state;
}

// exporta la función reductora
// create store recibe el parametro estado inicial
export default createStore(reducer, { item: [] });