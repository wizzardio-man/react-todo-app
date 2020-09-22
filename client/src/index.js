import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './middleware/store/index';

import './static/style/style.css';

import App from './components/app/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route 
        exact path='/' 
        component={App} 
      />
      <Route 
        exact path='/list/:listId' 
        component={App}
        isListsRendered={true} 
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
