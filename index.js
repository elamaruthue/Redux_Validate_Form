import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {reducer as formReducer} from 'redux-form';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  form:formReducer
})
const store =createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
