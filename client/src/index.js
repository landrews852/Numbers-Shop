import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import { customTheme } from './customTheme';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={customTheme}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
