import axios from 'axios';

export function getProducts() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/products');

    return dispatch({
      type: 'GET_PRODUCTS',
      payload: json.data,
    });
  };
}

export function addToCart(product) {
  console.log(product);
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
}

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
}

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
}

export function clearCart() {
  return {
    type: 'CLEAR_CART',
  };
}
