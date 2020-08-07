import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from "./chat";
import {BrowserRouter} from "react-router-dom"
import Router from './App/Router';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);