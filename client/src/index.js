import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './middleware/store/index';

import './static/style/style.css';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
