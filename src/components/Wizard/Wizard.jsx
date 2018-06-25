import React, { Component } from 'react';
import { Col } from 'reactstrap';
// react plugin used to create a form with multiple steps
import ReactWizard from './react-wizard.jsx';

import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import Step4 from './Step4.jsx';
import Step5 from './Step5.jsx';

var steps = [
    { stepName: 'Шаг 1', component: Step1 },
    { stepName: 'Шаг 2', component: Step2 },
    { stepName: 'Шаг 3', component: Step3 },
    { stepName: 'Шаг 4', component: Step4 },
    { stepName: 'Конец', component: Step5 }
]

class Wizard extends Component{

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Col xs={12} md={10} >{/*className="mr-auto ml-auto"*/}
                        <ReactWizard
                            steps={steps}
                            navSteps
                            validate
                            title="Одноразовый заказ"
                            subtitle="Эта информация позволит нам узнать больше о вас."
                            headerTextCenter
                            nextButtonClasses="btn-success"
                        />
                    </Col>
                </div>
            </div>
        );
    }
}

export default Wizard;