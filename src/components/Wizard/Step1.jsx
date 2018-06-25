import React from 'react';
import {
    Row, Col,
    InputGroup, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Valid_Step_1 } from "../../actions/WizardValidate.js";
import { Step_1 } from "../../actions/WizardStep.js";

class Step1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            firstnameState: "",
            lastnameState: "",
            emailState: ""
        };
        this.firstNameChange = this.firstNameChange.bind(this);
    }

    firstNameChange(e){
        this.setState({
            firstname: e.target.value
        });
        if(e.target.value.length > 2){
            this.setState({
                firstnameState: " has-success"
            });
            
        } else {
            this.setState({
                firstnameState: " has-danger"
            });
        }
    }

    lastNameChange(e){
        this.setState({
            lastname: e.target.value
        });
        if(e.target.value.length > 2){
            this.setState({
                lastnameState: " has-success"
            });

        } else {
            this.setState({
                lastnameState: " has-danger"
            });
        }
    }

    emailChange(e){
        this.setState({
            email: e.target.value
        });
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value)){
            this.setState({
                emailState: " has-success"
            });
        } else {
            this.setState({
                emailState: " has-danger"
            });
        }
    }

    isValidated(){
        if(this.state.firstnameState !== " has-success" || this.state.lastnameState !== " has-success" || this.state.emailState !== " has-success") {
            
            if(this.state.firstnameState !== " has-success")
                this.setState({ firstnameState: " has-danger" });
            
            if(this.state.lastnameState !== " has-success")
                this.setState({ lastnameState: " has-danger" });
            
            if(this.state.emailState !== " has-success")
                this.setState({ emailState: " has-danger" });
            
            return false;
        }
        let data = new Object();
        data.firstname = this.state.firstname;
        data.lastname = this.state.lastname;
        data.email = this.state.email;
        return data;
    }

    render(){
        return (
            <div>
                <h5 className="info-text">Шаг 1</h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={7} sm={10}>
                        <InputGroup size="lg" className={(this.state.firstnameState ? this.state.firstnameState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons users_circle-08"></i>
                            </div>
                            <Input
                                    defaultValue={this.state.firstname}
                                    type="text"
                                    placeholder="Имя (Обязательно поле)"
                                    name="firstname"
                                    onFocus={(e) => this.setState({firstnameFocus: true})}
                                    onBlur={(e) => this.setState({firstnameFocus: false})}
                                    onChange={(e) => this.firstNameChange(e)}
                            />
                        </InputGroup>
                        <InputGroup size="lg" className={(this.state.lastnameState ? this.state.lastnameState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons text_caps-small"></i>
                            </div>
                            <Input
                                    defaultValue={this.state.lastname}
                                    type="text"
                                    placeholder="Фамилия (Обязательно поле)"
                                    name="lastname"
                                    onFocus={(e) => this.setState({lastnameFocus: true})} 
                                    onBlur={(e) => this.setState({lastnameFocus: false})} 
                                    onChange={(e) => this.lastNameChange(e)}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={12} lg={7} sm={10}>
                        <InputGroup size="lg" className={(this.state.emailState ? this.state.emailState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons ui-1_email-85"></i>
                            </div>
                            <Input
                                    defaultValue={this.state.email}
                                    type="email"
                                    placeholder="Email (Обязательно поле)"
                                    name="email"
                                    onFocus={(e) => this.setState({emailFocus: true})}
                                    onBlur={(e)=> this.setState({emailFocus: false})}
                                    onChange={(e) => this.emailChange(e)}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { StepValidate: Valid_Step_1 }, { StepOne: Step_1 }), dispatch)
};

export default Step1;