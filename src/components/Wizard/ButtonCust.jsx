import React from 'react';
import {
    Row, Col, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

class ButtonCust extends React.Component {
    constructor(props){
        super(props);
        // var width;
        // if(this.props.steps === 1){
        //     width = '100%';
        // } else {
        //     if(window.innerWidth < 600){
        //         if(this.props.steps !== 3){
        //             width = '50%';
        //         } else {
        //             width = 100/3 + '%';
        //         }
        //     } else {
        //         if(this.props.steps === 2){
        //             width = '50%';
        //         } else {
        //             width = 100/3 + '%';
        //         }
        //     }
        // }
        this.state = {
            // currentStep: 0,
            // nextButton: (this.props.steps > 1 ? true:false)
        };
    }
    // navigationStepChange(key){
    //     if(this.props.navSteps){
    //         var validationState = true;
    //         if(key > this.state.currentStep){
    //             for(var i = this.state.currentStep ; i < key ; i++){
    //                 if( this.refs[this.props.steps[i].stepName].isValidated !== undefined &&
    //                     this.refs[this.props.steps[i].stepName].isValidated() === false){
    //                     validationState = false;
    //                     break;
    //                 }
    //             }
    //         }
    //         if(validationState){
    //             this.setState({
    //                 currentStep: key,
    //                 nextButton: (this.props.steps > key + 1 ? true:false),
    //                 previousButton: (key > 0 ? true:false),
    //                 finishButton: (this.props.steps === key + 1 ? true:false),
    //                 nextSucces: true
    //             });
    //         }
    //     }
    // }
    // nextButtonClick(){
    //     if(
    //         (this.props.validate &&
    //         ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
    //         this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
    //         this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined)) || this.props.validate === undefined){
    //             var key = this.state.currentStep + 1;
    //             this.setState({
    //                 currentStep: key,
    //                 nextButton: (this.props.steps > key + 1 ? true:false),
    //                 previousButton: (key > 0 ? true:false),
    //                 finishButton: (this.props.steps === key + 1 ? true:false)
    //             });
    //     }
    // }
    render() {
        return(
            <Button className={"btn-next" + (this.props.nextButtonClasses !== undefined ? (" "+this.props.nextButtonClasses):"")} onClick={() => this.nextButtonClick()}>{this.props.nextButtonText !== undefined ? this.props.nextButtonText:"Далее"}</Button>
        )
    }
}

// ButtonCust.propTypes = {
//     color: PropTypes.oneOf(['primary', 'green', 'orange', 'red', 'blue']),
//     previousButtonClasses: PropTypes.string,
//     finishButtonClasses: PropTypes.string,
//     nextButtonClasses: PropTypes.string,
//     headerTextCenter: PropTypes.bool,
//     steps: PropTypes.arrayOf(PropTypes.object),
//     navSteps: PropTypes.bool,
//     validate: PropTypes.bool
// }

export default ButtonCust;