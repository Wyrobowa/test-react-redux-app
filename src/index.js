import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './App';

// Stores
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
