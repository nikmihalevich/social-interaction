import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NotificationAlert from 'react-notification-alert';
import PropTypes from 'prop-types';

import { resetpassword } from "../../../../actions/user.js";

class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                newPasswordState: "",
                ConfPassState: ""
            },
            new_password: "",
            confirm_new_password: ""
        };
    }

    newPassword(e) {
        let State = this.state.State;
        this.state.new_password = e.target.value;

        if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(e.target.value))
            State["newPasswordState"] = "has-success";
        else 
            State["newPasswordState"] = "has-danger";
        if(this.state.new_password === this.stateconfirm_new_password && this.state.confirm_new_password)
            State["ConfPassState"] = "has-success";
         else
            State["ConfPassState"] = "has-danger";

        this.setState({State});
    }

    confirmNewPassword(e) {
        let State = this.state.State;
        this.state.confirm_new_password = e.target.value;
        if(this.state.new_password === this.state.confirm_new_password && this.state.confirm_new_password){
            State["ConfPassState"] = "has-success";
        } else {
            State["ConfPassState"] = "has-danger";
        }
        this.setState({State});
    }

    ResetPasswordSubmit = event => {
        event.preventDefault();
        let State = this.state.State;
        let userData = new Object();
        userData.new_password = this.state.new_password;
        userData.token = localStorage.resetToken;

        if(State["newPasswordState"] !== "has-success")
            State["newPasswordState"] = "has-danger";
        if(State["ConfPassState"] !== "has-success")
            State["ConfPassState"] = "has-danger";
        this.setState({State});

        if(State["newPasswordState"] === "has-success" && State["ConfPassState"] === "has-success") {
            resetpassword(userData)
            .then(res => {
                localStorage.removeItem("resetToken");
                this.notify();
                setTimeout(() => {
                    this.context.router.history.push('/login');
                }, 3500);
                
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }

    notify(){
        let options = {};
        options = {
            place: "tc",
            message: (
                <div>
                    <div>
                        Password was successfully changed!
                    </div>
                </div>
            ),
            type: 'success',
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 5
        }
        this.refs.notificationAlert.notificationAlert(options);
    }

    render() {
        return (
            <div className="reset-width">
                <NotificationAlert ref="notificationAlert"/>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-7 col-lg-5 col-sm-9 col-10'>
                            <form onSubmit={this.ResetPasswordSubmit} className='section-auth_form'>
                                <div className='form-group section-auth_form-headText'>
                                    <h2>Сброс пароля</h2>
                                </div>
                                <div className={"input-group " + this.state.State.newPasswordState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="New Password" 
                                        className="form-control"
                                        onChange={(e) => this.newPassword(e)}
                                    />
                                </div>
                                <div className={"input-group " + this.state.State.ConfPassState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="Confirm New Password" 
                                        className="form-control"
                                        onChange={(e) => this.confirmNewPassword(e)}
                                    />
                                </div>
                                <button type='submit' className='btn-round btn btn-primary btn-lg btn-block btn-login'>Cменить пароль</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ResetPassword.contextTypes = {
    router: PropTypes.object.isRequired
}

export default ResetPassword;