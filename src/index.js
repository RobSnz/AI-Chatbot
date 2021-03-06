import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from "./chat";
import AuthProvider from './Context/AuthContext';

ReactDOM.render(      
  <AuthProvider>
    <Provider store={ store }>
      <Router>
        <App/>
      </Router> 
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);