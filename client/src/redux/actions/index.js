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
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
}

export const increment = product => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const decrement = product => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};

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

export const getAllCarts = () => {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/carts');

    return dispatch({
      type: 'GET_CARTS',
      payload: json.data,
    });
  };
};

export const saveNewCart = cart => {
  return async function (dispatch) {
    var json = await axios.post('http://localhost:3001/carts/save', cart);

    return dispatch({
      type: 'SAVE_NEW_CART',
      payload: json.data,
    });
  };
};

export const loadCart = cart => {
  return {
    type: 'LOAD_CART',
    payload: cart,
  };
};

export const deleteCart = cartId => {
  return async function () {
    var json = await axios.delete(`http://localhost:3001/carts/delete/${cartId}`);
  };
};
