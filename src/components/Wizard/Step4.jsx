import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import IconCheckbox from './IconCheckbox.jsx';

class Step4 extends React.Component{
    constructor() {
        super();
        this.state = {
            checkedPersDataState: "",
            checkedAnon: ""
        }
    }

    setCheck = () => {
        if(this.state.checkedPersDataState !== ""){
            this.setState({
                checkedPersDataState: "",
            });
        } else {
            this.setState({
                checkedPersDataState: "active",
            });
        }
    }
    setCheckAnon = () => {
        if(this.state.checkedAnon !== ""){
            this.setState({
                checkedAnon: ""
            });
        } else {
            this.setState({
                checkedAnon: "active"
            });
        }
    }

    isValidated(){
        if(this.state.checkedPersDataState !== "active"){
            return false;
        }
        let data = new Object();
        data.checkedPersDataState = this.state.checkedPersDataState;
        data.checkedAnon = this.state.checkedAnon;
        return data;
    }

    render(){
        return (
            <div>
                <h5 className="info-text"> Шаг 4 </h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <Row className="justify-content-center">
                            <Col xs={6} sm={4}>
                                {/* <IconCheckbox
                                    name="job"
                                    value="Анонимный заказ"
                                    icon="now-ui-icons design-2_ruler-pencil"
                                    title="Анонимный заказ"
                                    onClick={() => this.setCheckAnon()}
                                /> */}
                                <div className={"choice " + (this.state.checkedAnon)} onClick={() => this.setCheckAnon()}>
                                    <input type="checkbox" name="anon" value="Анонимный заказ" ref="checkbox"/>
                                    <div className="icon">
                                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                                    </div>
                                    <h6>Анонимный заказ</h6>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className={"choice " + (this.state.checkedPersDataState)} onClick={() => this.setCheck()}>
                                    <input type="checkbox" name="personalData" value="Согласие на обработку персональных данных" ref="checkbox"/>
                                    <div className="icon">
                                        <i className="now-ui-icons business_bulb-63"></i>
                                    </div>
                                    <h6>Согласие на обработку персональных данных</h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step4;