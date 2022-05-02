const initialState = {
  products: [],
  cart: [],
  total: 0,
  amount: 0,
  isLoading: true,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    case 'ADD_TO_CART':
      let exists = state.cart.find((p, index) => {
        if (p.id === action.payload.id) {
          return true;
        }
      });
      if (!exists) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: state.total + action.payload.price,
          amount: state.amount + 1,
        };
      }

    case 'INCREMENT':
      return {
        ...state,
        total: state.total + action.payload.price,
        cart: state.cart.map(product => {
          if (product.id === action.payload.id) {
            product.quantity += 1;
          }
          return product;
        }),
      };

    case 'DECREMENT':
      return {
        ...state,
        total: state.total - action.payload.price,
        cart: state.cart.map(product => {
          if (product.id === action.payload.id) {
            product.quantity -= 1;
          }
          return product;
        }),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        total: state.total - action.payload.price * action.payload.quantity,
        amount: state.amount - 1,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        total: 0,
        amount: 0,
      };

    default:
        return state;
  }
}