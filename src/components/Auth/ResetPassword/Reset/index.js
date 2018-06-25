import React from 'react';
import PropTypes from 'prop-types';
import { takeToken } from "../../../../utils/takeToken.js";

class Reset extends React.Component {
    
    componentDidMount() {
        localStorage.setItem("resetToken", takeToken());
        localStorage.setItem("resetTimestamp", Date.now());
        this.context.router.history.push('/reset-password');
    }
    
    render() {
        return null;
    }
}

Reset.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Reset;