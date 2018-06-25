import React from 'react';
import {
    Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, Nav, NavItem, NavLink, TabContent, TabPane, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './react-wizard.css';
import { Step_1, Step_2, Step_3, Step_4 } from '../../actions/WizardStep.js'

class ReactWizard extends React.Component{
    constructor(props){
        super(props);
        var width;
        if(this.props.steps.length === 1){
            width = '100%';
        } else {
            if(window.innerWidth < 600){
                if(this.props.steps.length !== 3){
                    width = '50%';
                } else {
                    width = 100/3 + '%';
                }
            } else {
                if(this.props.steps.length === 2){
                    width = '50%';
                } else {
                    width = 100/3 + '%';
                }
            }
        }
        this.state = {
            currentStep: 0,
            color: this.props.color !== undefined ? this.props.color:"primary",
            nextButton: (this.props.steps.length > 1 ? true:false),
            previousButton: false,
            finishButton: this.props.steps.length === 1 ? true : false,
            width: width,
            movingTabStyle: {
                transition: 'transform 0s'
            }
        };
        this.navigationStepChange = this.navigationStepChange.bind(this);
        this.refreshAnimation = this.refreshAnimation.bind(this);
        this.previousButtonClick = this.previousButtonClick.bind(this);
        this.previousButtonClick = this.previousButtonClick.bind(this);
        this.finishButtonClick = this.finishButtonClick.bind(this);
    }
    componentDidMount(){
        this.refreshAnimation(0);
        window.addEventListener("resize", this.updateWidth.bind(this));
    }

    updateWidth(){
        this.refreshAnimation(this.state.currentStep);
    }
    navigationStepChange(key){
        if(this.props.navSteps){
            var validationState = true;
            if(key > this.state.currentStep){
                for(var i = this.state.currentStep ; i < key ; i++){
                    if( 
                        this.refs[this.props.steps[i].stepName].isValidated !== undefined &&
                        this.refs[this.props.steps[i].stepName].isValidated() === false
                        // !this.props.WizSteps[i].Step
                    ){
                        validationState = false;
                        break;
                    }
                }
            }
            if(validationState){
                this.setState({
                    currentStep: key,
                    nextButton: (this.props.steps.length > key + 1 ? true:false),
                    previousButton: (key > 0 ? true:false),
                    finishButton: (this.props.steps.length === key + 1 ? true:false),
                    nextSucces: true
                });
                this.refreshAnimation(key);
            }
        }
    }
    nextButtonClick(){ //this.props.WizSteps[this.state.currentStep].Step
        if(
            (this.props.validate &&
            ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined)) || this.props.validate === undefined){
                if(this.state.currentStep == 0) {
                    this.props.StepOne(this.refs[this.props.steps[this.state.currentStep].stepName].isValidated())
                } 
                else if( this.state.currentStep == 1 ) {
                    this.props.StepTwo(this.refs[this.props.steps[this.state.currentStep].stepName].isValidated())
                }
                else if( this.state.currentStep == 2 ) {
                    this.props.StepThree(this.refs[this.props.steps[this.state.currentStep].stepName].isValidated())
                }
                else if( this.state.currentStep == 3 ) {
                    this.props.StepFour(this.refs[this.props.steps[this.state.currentStep].stepName].isValidated())
                }
                var key = this.state.currentStep + 1;
                this.setState({
                    currentStep: key,
                    nextButton: (this.props.steps.length > key + 1 ? true:false),
                    previousButton: (key > 0 ? true:false),
                    finishButton: (this.props.steps.length === key + 1 ? true:false)
                });
                this.refreshAnimation(key);
        }
    }
    previousButtonClick(){
        var key = this.state.currentStep - 1;
        if( key >= 0 ){
            this.setState({
                currentStep: key,
                nextButton: (this.props.steps.length > key + 1 ? true:false),
                previousButton: (key > 0 ? true:false),
                finishButton: (this.props.steps.length === key + 1 ? true:false)
            });
            this.refreshAnimation(key);
        }
    }
    finishButtonClick(){
        if(
            this.props.validate &&
            ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined) &&
            this.props.finishButtonClick !== undefined){
                    this.props.finishButtonClick();
        }
    }
    refreshAnimation(index){
        var total = this.props.steps.length;
        var li_width = 100/total;
        var total_steps = this.props.steps.length;
        var move_distance = this.refs.wizard.children[0].offsetWidth / total_steps;
        var index_temp = index;
        var vertical_level = 0;

        var mobile_device = window.innerWidth < 600 && total > 3;

        if(mobile_device){
            move_distance = this.refs.wizard.children[0].offsetWidth / 2;
            index_temp = index % 2;
            li_width = 50;
        }

        this.setState({width: li_width + '%'})

        var step_width = move_distance;
        move_distance = move_distance * index_temp;

        var current = index + 1;

        // if(current === 1 || (mobile_device === true && (index % 2 === 0) )){
        //     move_distance -= 8;
        // } else if(current === total_steps || (mobile_device === true && (index % 2 === 1))){
        //     move_distance += 8;
        // }

        if(mobile_device){
            vertical_level = parseInt(index / 2);
            vertical_level = vertical_level * 55;
        }
        var movingTabStyle = {
            width: step_width,
            transform: 'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
            transition: 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
        }
        this.setState({movingTabStyle: movingTabStyle})
    }
    render(){

        return(
            <div className="wizard-container" ref="wizard">
                <Card className="card card-wizard active" data-color="primary">
                    {(this.props.title !== undefined || this.props.subtitle !== undefined) ? (<CardHeader className={this.props.headerTextCenter !== undefined ? "text-center":""} data-background-color={this.state.color}>
                        {this.props.title !== undefined ? (<CardTitle tag="h3">{this.props.title}</CardTitle>):null}
                        {this.props.subtitle !== undefined ? (<CardSubtitle>{this.props.subtitle}</CardSubtitle>):null}
                        <div className="wizard-navigation">
                            <Nav pills>
                                {
                                    this.props.steps.map((prop,key) => {
                                        return (
                                            <NavItem key={key} style={{width: this.state.width}}>
                                                <NavLink
                                                    className={key === this.state.currentStep ? "active":""}
                                                    onClick={() => this.navigationStepChange(key)}
                                                >
                                                    {prop.stepName}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                            <div className="moving-tab" style={this.state.movingTabStyle}>{this.props.steps[this.state.currentStep].stepName}</div>
                        </div></CardHeader>):null}
                    <CardBody>
                        <TabContent activeTab={this.state.currentStep}>
                            {  
                                this.props.steps.map((prop,key) => {
                                    return (
                                        <TabPane tabId={key} key={key} className={this.state.currentStep === key ? "fade show":"fade"}>
                                            {
                                                typeof prop.component === 'function' ? (
                                                    <prop.component ref={prop.stepName}/>
                                                ):(
                                                    <div ref={prop.stepName}>
                                                        {prop.component}
                                                    </div>
                                                )
                                            }
                                        </TabPane>
                                    );
                                })
                            }
                        </TabContent>
                    </CardBody>
                    <CardFooter>
                        <div style={{float: "right"}}>
                            {this.state.nextButton ? (<Button className={"btn-next" + (this.props.nextButtonClasses !== undefined ? (" "+this.props.nextButtonClasses):"")} onClick={() => this.nextButtonClick()}>{this.props.nextButtonText !== undefined ? this.props.nextButtonText:"Далее"}</Button>):null}
                            {this.state.finishButton ? (<Button className={"btn-finish" + (this.props.finishButtonClasses !== undefined ? (" "+this.props.finishButtonClasses):"")} onClick={() => this.finishButtonClick()}>{this.props.finishButtonText !== undefined ? this.props.finishButtonText:"Завершить заказ"}</Button>):null}
                        </div>
                        <div style={{float: "left"}}>
                            {this.state.previousButton ? (<Button className={"btn-previous" + (this.props.previousButtonClasses !== undefined ? (" "+this.props.previousButtonClasses):"")} onClick={() => this.previousButtonClick()}>{this.props.previousButtonText !== undefined ? this.props.previousButtonText:"Назад"}</Button>):null}
                        </div>
                        <div className="clearfix">

                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

ReactWizard.propTypes = {
    color: PropTypes.oneOf(['primary', 'green', 'orange', 'red', 'blue']),
    previousButtonClasses: PropTypes.string,
    finishButtonClasses: PropTypes.string,
    nextButtonClasses: PropTypes.string,
    headerTextCenter: PropTypes.bool,
    steps: PropTypes.arrayOf(PropTypes.object),
    navSteps: PropTypes.bool,
    validate: PropTypes.bool
}

function mapStateToProps(state){
    return {
        WizSteps: state.wizardStep
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StepOne: Step_1, StepTwo: Step_2, StepThree: Step_3, StepFour: Step_4 }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactWizard);
