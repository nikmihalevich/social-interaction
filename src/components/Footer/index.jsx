import React from 'react';

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row justify-content-xl-between justify-content-sm-center justify-content-center align-items-center'>
                    <div className='col-md-auto col-sm-auto col-auto'>
                        <ul className='footer_soc-icon'>
                            <li><a href='#'><i className='fa fa-vk'></i></a></li>
                            <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                            <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                            <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                        </ul>
                    </div>
                    <div className='col-md-auto col-sm-auto col-auto'>
                        <div className="descr_footer" >                                   
                            &copy; 2018. Создание и дизайн от
                            <a href="//silentstudio.ru"> Silent Studio</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;