import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
 
import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';
import store from './store/index.jsx'
import {setAuthorizationToken} from './utils/setAuthorizationToken.js';
import { LogIn } from './actions/user.js'

import Rootrouter from './routes.jsx'

if(localStorage.JWToken) {
    setAuthorizationToken(localStorage.JWToken);
    store.dispatch(LogIn());
}

if(localStorage.resetTimestamp + 1 <= Date.now()) { // finish 
    localStorage.removeItem("resetToken");          // this
    localStorage.removeItem("resetTimestamp");
}

render(
    <Provider store={store}>
        <Rootrouter />                              
    </Provider>,
    document.getElementById('root')
);