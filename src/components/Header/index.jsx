import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { MenuItem } from './MenuItem.jsx';
import { LogOut, logout } from '../../actions/user.js';

class Header extends Component {
    render(props) {
    
    const LogoutFunc = () => {
        this.props.LogoutUser()
        logout();
        localStorage.removeItem("avatar");
        localStorage.removeItem("bg");
        this.context.router.history.push('/login')
    }
    const isAuthenticated = this.props.user;

    const userLinks = (
        <ul className="ml-auto navbar-nav">
            <MenuItem content="События" link="board" icon="design_bullet-list-67"  />
            <MenuItem content="Профиль" link="profile" icon="business_badge"  />
            <li className="nav-item">
                <a onClick={LogoutFunc} className="nav-link">
                    <i className="now-ui-icons sport_user-run"></i>
                    Выйти
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="ml-auto navbar-nav">
            <MenuItem content="Одноразовый заказ" link="one-time-order" icon="design_bullet-list-67"  />
            <MenuItem content="Регистрация" link="register" icon="tech_mobile" />
            <MenuItem content="Вход" link="login" icon="users_circle-08"  />
        </ul>
    );

    return (
        <nav className="navbar-transparent navbar-absolute navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    <button className="navbar-toggler" data-target="#navbarNav" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <Link className="navbar-brand header_desc-logo" to="/">Lendlease</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    { isAuthenticated ? userLinks : guestLinks }
                </div>
            </div>
        </nav>
    );
}
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
}

// Function method
function mapDispatchToProps(dispatch) {
    return {
        LogoutUser: () => {
            dispatch(LogOut());
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
