import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // no uso module ni styled components porque aplico estilo UNA SOLA VEZ y TODA la app
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js'; // si exporta por default, importa con cualquier nombre y sin llaves

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
