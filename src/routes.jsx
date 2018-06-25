import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';
import Reset from "./components/Auth/ResetPassword/Reset/index.js";
import ResetPassword from "./components/Auth/ResetPassword/FormResetPassPage/index.jsx";
import User from './components/UserProfile/index.jsx';
import Wizard from './components/Wizard/Wizard.jsx';
import Board from "./components/Board/index.jsx";

const Rootrouter = () => {

    const checkAuth = () => {
        const token = localStorage.getItem('JWToken');
        if(token) {
            return true;
        } else {
            return false;
        }
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    to="/login"
                    />
                )
            }
        />
    );

    const IsAuth = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                checkAuth() ? (
                    <Redirect
                    to="/profile"
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );

    const NoMatch = ({ location }) => (
        <div className="error-404">
            <h2>404 ERROR</h2>
            <h3>
                No match for <em>{location.pathname}</em>
            </h3>
        </div>
      );

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <IsAuth path='/register' component={Register} />
                    <IsAuth path='/login' component={Login} />
                    <IsAuth path='/reset' component={Reset} />
                    <IsAuth path='/reset-password' component={ResetPassword} />
                    <IsAuth path='/one-time-order' component={Wizard} />
                    <PrivateRoute path='/profile' component={User} />
                    <PrivateRoute path='/board' component={Board} />
                    <Route path='*' component={NoMatch} />
                </Switch>
            </Layout>
        </Router>
    );
}
//PrivateRoute
export default Rootrouter;