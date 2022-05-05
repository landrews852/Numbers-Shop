import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

// Import the necessary methods for saving and loading
import { save, load } from 'redux-localstorage-simple';

/*
    Saving to LocalStorage is achieved using Redux 
    middleware. The 'save' method is called by Redux 
    each time an action is handled by your reducer.
*/
const createStoreWithMiddleware = applyMiddleware(
  save() // Saving done here
)(createStore);

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/
const store = createStoreWithMiddleware(
  reducer,
  load() // Loading done here
);

// import { useState } from "react";

// export function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (err) {
//       return initialValue;
//     }
//   });

//   const setValue = (value) => {
//     try {
//       setStoredValue(value);
//       window.localStorage.setItem("key", JSON.stringify(value));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return [storedValue, setValue];
// }
