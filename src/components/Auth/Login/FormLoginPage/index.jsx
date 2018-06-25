import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Restore from '../../Restore/FormRestorePage/index.jsx';
import { LogIn, login } from '../../../../actions/user.js';
import { setAuthorizationToken } from "../../../../utils/setAuthorizationToken.js";
import { randomAvatar, randomBg } from "../../../../utils/generateRandomImg.js";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                passwordState: "",
                loginState: "",
                loginEmailState: "",
                error: ""
            },
            login: {
                password: "",
                email: ""
            }
        };
    }

    loginUser(e){
        let State = this.state.State;
        this.state.login.login = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/.test(e.target.value) )
            State["loginState"] = "has-success";
        else
            State["loginState"] = "has-danger";
        this.setState({State});
    }

    loginEmail(e){
        let State = this.state.State;
        this.state.login.email = e.target.value;
        let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value))
            State["loginEmailState"] = "has-success";
        else 
            State["loginEmailState"] = "has-danger";
        this.setState({State});
    }

    loginPassword(e){
        let State = this.state.State;
        this.state.login.password = e.target.value;
        if(/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/.test(e.target.value))
            State["passwordState"] = "has-success";
        else
            State["passwordState"] = "has-danger";
        this.setState({State});
    }

    loginSubmit = event => {
        event.preventDefault();
        let State = this.state.State;   
        let userData = this.state.login;
        if(State["loginEmailState"] !== "has-success")
            State["loginEmailState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";
        State["error"] = " ";
        this.setState({State});
        if(State["loginEmailState"] === "has-success" && State["passwordState"] === "has-success") {
            login(userData)
            .then(res => {
                localStorage.setItem('JWToken', res.data.token);
                localStorage.setItem('avatar', randomAvatar())
                localStorage.setItem('bg', randomBg())
                setAuthorizationToken(res.data.token);
                this.props.LogIn();
                this.context.router.history.push('/');
            })
            .catch(err => {
                if(err.response.data.message === "INVALID_CREDENTIALS")
                    State["error"] = "Неверный логин или пароль";
                else
                    State["error"] = "Ошибка";
                State["loginEmailState"] = null;
                State["passwordState"] = null;
                this.setState({State});
            })
        }
    }

    render() {
        return (
            
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-7 col-lg-5 col-sm-9 col-10'>
                            <form onSubmit={this.loginSubmit} className='section-auth_form'>
                                <div className='form-group section-auth_form-headText'>
                                    <h2>Вход</h2>
                                </div>
                                <div className={"input-group " + this.state.State.loginEmailState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="Email" 
                                        className="form-control"
                                        onChange={(e) => this.loginEmail(e)}
                                    />
                                </div>
                                <div className={"input-group " + this.state.State.passwordState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="Пароль" 
                                        className="form-control"
                                        onChange={(e) => this.loginPassword(e)}
                                    />
                                </div>
                                <h6 className="text-danger">{this.state.State.error}</h6>
                                <button type='submit' className='btn-round btn btn-primary btn-lg btn-block btn-login'>Войти</button>
                                <div className="pull-left">
                                    <h6>
                                        <Link to="/register" className="link footer-link">Создать аккаунт</Link>
                                    </h6>
                                </div>
                                <div className="pull-right">
                                    <h6>
                                        <a href='#' className="link footer-link" data-toggle="modal" data-target="#exampleModal">Забыли пароль?</a>
                                    </h6>
                                </div>
                            </form>
                            <Restore />
                        </div>
                    </div>
                </div>
            
        );
    }
};

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ LogIn: LogIn }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);