import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props) {

    const isAuthenticated = props.user;

    const isLogged = () => {
        return (
            <Redirect to="/board" />
        );
    }

    const isNotLogged = () => {
        return (
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className="content_button">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-auto col-lg-6 col-md-auto col-sm-auto col-auto">
                                    <Link to='/one-time-order' className='oneOrder btn btn-primary'>Одноразовый заказ</Link>
                                </div>
                                <div className="col-xl-auto col-lg-6 col-md-6 col-sm-auto col-auto">
                                    <Link to='/register' className='reg btn btn-primary'>Регистрация</Link>
                                </div>
                                <div className="col-xl-auto col-lg-6 col-md-5 col-sm-auto col-auto">
                                    <Link to='/login' className='btn btn-primary'>Вход</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
            
        isAuthenticated ? isLogged() : isNotLogged()
        
    );
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

export default connect(mapStateToProps, null)(Home);