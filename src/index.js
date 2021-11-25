import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.css';
import { Provider } from './store';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'));