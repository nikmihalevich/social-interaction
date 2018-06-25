import React from 'react';
import {
    Row, Col,
    InputGroup, Input
} from 'reactstrap';
import Select from 'react-select';

import { category, flowers, toys, food, counts } from '../../arrays/selectArrays.js'

class Step2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectOne : null,
            selectTwo : null,
            selectThree : null,
            valSelectTwo: null,
            disSelectTwo: false,
            disSelectThree: false
        }
    }

    isValidated(){
        if(this.state.selectOne === null || this.state.selectTwo === null || this.state.selectThree === null){
            return false;
        }
        let data = new Object();
        data.category = this.state.selectOne;
        data.item = this.state.selectTwo.value;
        data.count = this.state.selectThree.value;
        return data;
    }

    changeSelectOne = (value) => {
        this.setState({ selectOne: value.value, disSelectTwo: true, selectTwo: null }, () => this.state.selectTwo ? null : this.setState({ disSelectThree: false, selectThree: null }) );

        switch(value.value) {
            case "flowers":
                this.setState({ valSelectTwo: flowers});
                break;
            case "toys":
                this.setState({ valSelectTwo: toys});
                break;
            case "food":
                this.setState({ valSelectTwo: food});
                break;
            default:
                this.setState({ valSelectTwo: null});
                break;
        }
    }

    render(){
        return (
            <div>
                <h5 className="info-text">Шаг 2</h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={4}>
                        <Select
                                className="mb-select"
                            placeholder="Категория подарка"
                            name="SelectOne"
                            value={this.state.selectOne}
                            options={category}
                            onChange={(value) => this.changeSelectOne(value)}
                        />
                    </Col>
                    <Col xs={12} lg={4}>
                        { this.state.disSelectTwo && <Select
                                className="mb-select"
                                placeholder="Подарок"
                                name="SelectTwo"
                                value={this.state.selectTwo}
                                options={this.state.valSelectTwo} 
                                onChange={(value) => this.setState({ selectTwo: value, disSelectThree: true })}
                            />
                        }
                    </Col>
                    <Col xs={12} lg={4}>
                        { this.state.disSelectThree && <Select
                                className="mb-select"
                                placeholder="Количество"
                                name="SelectThree"
                                value={this.state.selectThree}
                                options={counts}
                                onChange={(value) => this.setState({ selectThree: value})}
                            />
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step2;