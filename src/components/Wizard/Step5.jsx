import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Step_5 } from '../../actions/WizardStep.js';

// import { Link } from 'react-router-dom';

class Step5 extends Component{

    finishOrder = () => {
        this.props.StepFinish()
        this.context.router.history.push('/');
    }
    render(){
        return (
            <div className="wizard-step">
                <h2 className="text-center text-space">
                    Вы дошли до конца!
                    <br />
                    <small> Нажмите "<b>Готово</b>" чтобы завершить заказ</small>
                </h2>
                <div className="wizard-finish-button">
                    <button onClick={this.finishOrder} className="btn btn-secondary close-button">Готово</button>
                </div>
            </div>
        );
    }
}

Step5.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        wizardStep: state.wizardStep
    }
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StepFinish: Step_5 }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Step5);