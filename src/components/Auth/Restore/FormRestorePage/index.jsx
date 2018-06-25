import React from 'react';
import NotificationAlert from 'react-notification-alert';
import PropTypes from 'prop-types';

import { restore } from "../../../../actions/user.js";

class Restore extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                emailState: "",
                error: ""
            },
            restore: {
                email: ""
            },
        };
    }

    restoreEmail(e){
        var State = this.state.State;
        this.state.restore.email = e.target.value;
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value))
            State["emailState"] = "has-success";
        else
            State["emailState"] = "has-danger";
        this.setState({State});
    }

    restoreSubmit = e => {
        e.preventDefault();
        var State = this.state.State;   
        var userData = this.state.restore;
        if(State["emailState"] !== "has-success")
            State["emailState"] = "has-danger";
        State["error"] = " ";
        this.setState({State});
        if(State["emailState"] === "has-success") {
            restore(userData)
            .then(res => {
                this.notify();
                $('.close').click();
            })
            .catch(err => {
                if(err.response.data.response_code === "NO_SUCH_EMAIL")
                    State["error"] = "Указан не существующий E-mail адрес ";
                this.setState({State});
            });
        }
    }

    notify(){
        let options = {};
        options = {
            place: "tc",
            message: (
                <div>
                    <div>
                        Сообщение успешно отправлено на вашу почту
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
        return(
            <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <NotificationAlert ref="notificationAlert"/>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Восстановить пароль</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={this.restoreSubmit}>
                                <div className={"form-group " + this.state.State.emailState}>
                                    <label>Email адрес</label>
                                    <input type="email" 
                                        className="form-control" 
                                        placeholder="Введите Email"
                                        onChange={(e) => this.restoreEmail(e)}
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary confPass'>Отправить</button>
                            </form>
                        </div>
                        <h6>{this.state.State.error}</h6>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Restore.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Restore;