import React from 'react';
import {
    Nav, NavItem, NavLink
} from 'reactstrap';
import { connect } from 'react-redux';

import {FirtsTab, SecondTab, ThirdTab} from '../../../actions/userProfile.js'

function TabMenu(props) {

    const fstTab = () => { //Переключение на первый таб
        props.FirtsTab();
    };

    const secTab = () => { //переключение на второй таб
        props.SecondTab();
    };

    const thrTab = () => { //Переключение на третий таб
        props.ThirdTab();
    }


    return (
        <Nav pills className="nav-pills-primary nav-pills-icons justify-content-center">
            <NavItem className="mb-tab">
                <NavLink
                    className={props.pageSub === "ps1" ? "active":""}
                    onClick={fstTab}
                >
                    <i className="now-ui-icons objects_umbrella-13"></i>
                    Главная
                </NavLink>
            </NavItem>
            <NavItem className="mb-tab">
                <NavLink
                    className={props.pageSub === "ps2" ? "active":""}
                    onClick={secTab}
                >
                    <i className="now-ui-icons shopping_shop"></i>
                    Сообщения
                </NavLink>
            </NavItem>
            <NavItem className="mb-tab">
                <NavLink
                    className={props.pageSub === "ps3" ? "active":""}
                    onClick={thrTab}
                >
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Настройки
                </NavLink>
            </NavItem>
        </Nav>
    );
}

function mapStateToProps(state){
    return {
        pageSub: state.userProfile.pageSubcategories
    }
};

function mapDispatchToProps(dispatch) {
    return {
        FirtsTab: () => {
            dispatch(FirtsTab());
        },
        SecondTab: () => {
            dispatch(SecondTab());
        },
        ThirdTab: () => {
            dispatch(ThirdTab());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu);