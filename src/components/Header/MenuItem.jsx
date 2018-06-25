import React from 'react';
import { NavLink } from 'react-router-dom';

export const MenuItem = ({ link, icon, content }) => {
    return(
        <li className="nav-item">
            <NavLink exact to={`/${link}`} className="nav-link">
                <i className={`now-ui-icons ${icon}`}></i>
                {content}
            </NavLink>
        </li>
    );
}