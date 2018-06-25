import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';
// import axios from 'axios';
import { connect } from 'react-redux';

import CardAuthor  from './Components/CardAuthor.jsx';
import CardSocials from './Components/CardSocials.jsx';
import EditForm from './Components/EditForm.jsx';
import Button from './Components/CustomButton.jsx';
import Panels from './Components/Panels.jsx'
import TabMenu from './Components/TabMenu.jsx'
import { ChangeProfile } from "../../actions/userProfile.js";

const User = (props) => {

    const ChangeProfFunc = () => {
        props.ChngProf();
    }

    return (
        <div className="container-fluid mtb-profile">
            <div className="row row-width align-items-center justify-content-center">
                <Col className="col-xl-7 col-lg-7 col-md-10 offset-md-0 col-sm-12 col-12 profile-menu">
                    <Card>
                        <CardHeader>
                            {props.upProf && <h5 className="title">Изменить профиль</h5>}
                            {!props.upProf && <TabMenu />}
                        </CardHeader>
                        <CardBody>
                            {props.upProf && <EditForm />}
                            {!props.upProf  && <Panels />}
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={3} lg={4} md={10} sm={12} xs={12} className="wrap-card-user">
                    <Card className="card-user">
                        <div className="image">
                            <img src={localStorage.bg} alt="..."/>
                        </div>
                        <CardBody>
                            <CardAuthor
                                avatar={localStorage.avatar}
                                title={props.profileData.firstName && props.profileData.lastName ? props.profileData.firstName + " " + props.profileData.lastName : "No info"}
                                description={props.profileData.login ? props.profileData.login : "No info"}
                            />
                            <p className="description text-left">
                                Email адрес: {props.profileData.email ? props.profileData.email : "No info"} <br/>
                                Телефон: {props.profileData.phone ? props.profileData.phone : "No info"} <br/>
                                Адрес: {props.profileData.address ? props.profileData.address : "No info"}
                            </p>
                        </CardBody>
                        {!props.upProf && <Button className="btn btn-primary" type="button" onClick={ChangeProfFunc}>Изменить профиль</Button> }
                    </Card>
                </Col>
            </div>
        </div>
    );

}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile,
        profileData: state.userProfile.profileInformation
    }
};

function mapDispatchToProps(dispatch) {
    return {
        ChngProf: () => {
            dispatch(ChangeProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);