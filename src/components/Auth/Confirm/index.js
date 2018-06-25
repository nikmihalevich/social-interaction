import React from 'react';
import PropTypes from 'prop-types';

import { takeToken } from "../../../utils/takeToken.js";

class Confirm extends React.Component {
    
    componentDidMount() {
        //this.context.router.history.push('/reset-password');
    }
    
    render() {
        return null;
    }
}

Confirm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Confirm;