import React, { Component } from 'react';
import axios from 'axios';
import NotificationAlert from 'react-notification-alert';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                emailState: "",
                passwordState: "",
                confirmState: "",
                loginState: "",
                error: ""
            },
            register: {
                email: "",
                password: "",
                confirm: "",
                username: ""
            },
            
        };
    }

    registerUsername(e){
        let State = this.state.State;
        this.state.register.username = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(e.target.value) )
            State["loginState"] = "has-success";
        else
            State["loginState"] = "has-danger";
        this.setState({State});
    }

    registerEmail(e){
        let State = this.state.State;
        this.state.register.email = e.target.value;
        let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value))
            State["emailState"] = "has-success";
        else
            State["emailState"] = "has-danger";
        this.setState({State});
    }

    registerPassword(e){
        let State = this.state.State;
        this.state.register.password = e.target.value;
        if(/(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/.test(e.target.value))  // /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/.test(e.target.value)
            State["passwordState"] = "has-success";
        else
            State["passwordState"] = "has-danger";
        if(this.state.register.password === this.state.register.confirm && this.state.register.confirm)
            State["confirmState"] = "has-success";
        else
            State["confirmState"] = "has-danger";
        this.setState({State});
    }
    
    registerConfirm(e){
        let State = this.state.State;
        this.state.register.confirm = e.target.value;
        if(this.state.register.password === this.state.register.confirm && this.state.register.confirm)
            State["confirmState"] = "has-success";
        else 
            State["confirmState"] = "has-danger";
        this.setState({State});
    }
    
    registerSubmit = event => {
        event.preventDefault();
        
        let State = this.state.State;

        let userData = new Object();
        userData.email = this.state.register.email;
        userData.username = this.state.register.username;
        userData.password = this.state.register.password;

        if(State["loginState"] !== "has-success")
            State["loginState"] = "has-danger";
        if(State["emailState"] !== "has-success")
            State["emailState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";
        if(State["confirmState"] !== "has-success")
            State["confirmState"] = "has-danger";
        State["error"] = "";   
        this.setState({State});
        if(State["loginState"] === "has-success" && State["emailState"] === "has-success" 
          && State["passwordState"] === "has-success" && State["confirmState"] === "has-success") {     
            axios.post('http://localhost:5000/api/auth/register/', userData).then(
                (response) => {
                    console.log(response);
                    this.notify();
                    document.formReg.reset();
                    State["loginState"] = " ";
                    State["emailState"] = " ";
                    State["passwordState"] = " ";
                    State["confirmState"] = " ";
                    this.setState({State});
                }
            )
            .catch(
                (err) => {
                    State["error"] = err.response.data.message;
                    this.setState({State});
                }
            )
        }
    }

    notify(){
        let options = {};
        options = {
            place: "tc",
            message: (
                <div>
                    <div>
                        Добропожаловать в <b>LENDLEASE</b> - регистрация прошла успешно.
                    </div>
                </div>
            ),
            type: 'success',
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 3
        }
        this.refs.notificationAlert.notificationAlert(options);
    }

    render() {
        return (
            <div className="container-fluid mt">
                <NotificationAlert ref="notificationAlert"/>
                <div className="justify-content-center row">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-5">
                        <div className="info-area info-horizontal">
                            <div className="icon icon-info">
                                <i className="now-ui-icons media-2_sound-wave"></i>
                            </div>
                            <div className="description">
                                <h5 className="info-title">Маркетинг</h5>
                                <p className="description">Мы создали маркетинговую кампанию сайта. Это было очень интересное сотрудничество.</p>
                            </div>
                        </div>
                        <div className="info-area info-horizontal">
                            <div className="icon icon-info">
                                <i className="now-ui-icons media-1_button-pause"></i>
                            </div>
                            <div className="description">
                                <h5 className="info-title">Полностью создано на React 16</h5>
                                <p className="description">Мы разработали веб-сайт с помощью React 16, HTML5, CSS3 и Bootstrap 4.</p>
                            </div>
                        </div>
                        <div className="info-area info-horizontal">
                            <div className="icon icon-info">
                                <i className="now-ui-icons users_single-02"></i>
                            </div>
                            <div className="description">
                                <h5 className="info-title">Встроенная доска событий</h5> {/*Built Audience*/}
                                <p className="description">Для этого продукта есть полностью настраиваемая доска напоминаний.</p> {/*There is also a Fully Customizable CMS Admin Dashboard for this product.*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                        <div className="card-signup card">
                            <div className="text-center card-header">
                                <h4 className="card-title">Регистрация</h4>
                            </div>
                            <div className="card-body">
                                <form name="formReg" onSubmit={this.registerSubmit}>
                                    <div className={ "input-group "  + this.state.State.loginState  }>
                                        <div className="input-group-addon">
                                            <i className="now-ui-icons icons-form users_circle-08"></i>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Имя пользователя"
                                            className="form-control"
                                            onChange={(e) => this.registerUsername(e)}
                                        />
                                    </div>
                                    <div className={ "input-group " + this.state.State.emailState }>
                                        <div className="input-group-addon">
                                            <i className="now-ui-icons icons-form ui-1_email-85"></i>
                                        </div>
                                        <input 
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
                                            onChange={(e) => this.registerEmail(e)}
                                        />
                                    </div>
                                    <div className={ "input-group " + this.state.State.passwordState }>
                                        <div className="input-group-addon">
                                            <i className="now-ui-icons icons-form ui-1_lock-circle-open"></i>
                                        </div>
                                        <input 
                                            type="password"
                                            placeholder="Пароль"
                                            className="form-control"
                                            onChange={(e) => this.registerPassword(e)}
                                        />
                                    </div>
                                    <div className={ "input-group " + this.state.State.confirmState }>
                                        <div className="input-group-addon">
                                            <i className="now-ui-icons icons-form ui-1_lock-circle-open"></i>
                                        </div>
                                        <input 
                                            type="password" 
                                            placeholder="Повторите пароль" 
                                            className="form-control"
                                            onChange={(e) => this.registerConfirm(e)}
                                        />
                                    </div>
                                    
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" value="on" />
                                            <span className="form-check-sign"></span>
                                            <div>Я согласен на обработку <a href="#something">персональных данных</a>.</div>
                                        </label>
                                    </div>
                                    <h6 className="text-justify">{this.state.State.error}</h6>
                                    <div className="text-center card-footer">
                                        <button type='submit' className="btn-round btn btn-primary btn-lg">Зарегистрироваться</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Register;