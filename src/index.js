import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/reducer.js'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

const store =  createStore(reducer,applyMiddleware(thunk))

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
