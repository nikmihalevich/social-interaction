import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormInputs  from './../../../FormInputs.jsx';
import Button from './CustomButton.jsx';

import { SaveProfile, SaveProfData } from '../../../actions/userProfile.js';

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            State: {
                loginState: "",
                emailState: "",
                EmailState: "",
                phoneState: "",
                firstNameState: "",
                lastNameState: "",
                addressState: ""
            },

            userProf: {
                login: "",
                email: "",
                phone: "",
                firstName: "",
                lastName: "",
                address: ""
            }
        }
    }

    componentDidMount() {
        var userProf = this.state.userProf;
        userProf.login = document.getElementById("login").value
        userProf.email = document.getElementById("email").value
        userProf.phone = document.getElementById("phone").value
        userProf.firstName = document.getElementById("firstName").value
        userProf.lastName = document.getElementById("lastName").value
        userProf.address = document.getElementById("address").value
        this.setState({userProf})
    }

    SaveProfFunc = e => {
        this.props.SaveProfData(this.state.userProf);
        console.log(this.props.SaveProfData(this.state.userProf))
        this.props.SaveProfile();
    }
    
    loginUser(e){
        var State = this.state.State;
        var userProf = this.state.userProf;
        userProf.login = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/.test(e.target.value) ){
            State["loginState"] = "has-success";
        } else {
            State["loginState"] = "has-danger";
        }
        this.setState({State});
    }

    emailUser(e){
        var userProf = this.state.userProf;
        userProf.email = e.target.value;
        this.setState({userProf});   
    }
    phoneUser(e){
        var userProf = this.state.userProf;
        userProf.phone = e.target.value;
        this.setState({userProf});   
    }
    firstNameUser(e){
        var userProf = this.state.userProf;
        userProf.firstName = e.target.value;
        this.setState({userProf});   
    }
    lastNameUser(e){
        var userProf = this.state.userProf;
        userProf.lastName = e.target.value;
        this.setState({userProf});   
    }
    addressUser(e){
        var userProf = this.state.userProf;
        userProf.address = e.target.value;
        this.setState({userProf});
    }

    render() {
        return(
            <form>
                <FormInputs
                    ncols = {["col-md-4" , "col-md-4" , "col-md-4"]}
                    proprieties = {[
                        {
                            label : "Имя пользователя",
                            inputProps : {
                                type : "text",
                                placeholder: "Имя пользователя",
                                id: "login",
                                defaultValue: this.props.profileData.login,
                                className: this.state.State.loginState,
                                onChange: (e) => this.loginUser(e)
                            }
                        },
                        {
                            label : "Email адрес",
                            inputProps : {
                                type : "email",
                                placeholder: "Email",
                                id: "email",
                                defaultValue: this.props.profileData.email,
                                onChange: (e) => this.emailUser(e)
                            }
                        },
                        {
                            label : "Телефон",
                            inputProps : {
                                type : "text",
                                placeholder: "Телефон",
                                id: "phone",
                                defaultValue: this.props.profileData.phone,
                                onChange: (e) => this.phoneUser(e)
                            }
                        }
                    ]}
                />

                <FormInputs
                    ncols = {["col-md-6" , "col-md-6"]}
                    proprieties = {[
                        {
                            label : "Имя",
                            inputProps : {
                                type : "text",
                                placeholder: "Имя",
                                id: "firstName",
                                defaultValue: this.props.profileData.firstName,
                                onChange: (e) => this.firstNameUser(e)
                            }
                        },
                        {
                            label : "Фамилия",
                            inputProps : {
                                type : "text",
                                placeholder: "Фамилия",
                                id: "lastName",
                                defaultValue: this.props.profileData.lastName,
                                onChange: (e) => this.lastNameUser(e)
                            }
                        }
                    ]}
                />
                <FormInputs
                    ncols = {["col-md-12"]}
                    proprieties = {[
                        {
                            label : "Адрес",
                            inputProps : {
                                type : "text",
                                placeholder: "Адрес",
                                id: "address",
                                defaultValue: this.props.profileData.address,
                                onChange: (e) => this.addressUser(e)
                            }
                        }
                    ]}
                />
                <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={this.SaveProfFunc}
                    
                >
                    Сохранить изменения
                </Button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile,
        profileData: state.userProfile.profileInformation
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ SaveProfile: SaveProfile, SaveProfData: SaveProfData}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);