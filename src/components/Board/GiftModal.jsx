import React from 'react';
import {
    Row, Col
} from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { category, flowers, toys, food, counts } from '../../arrays/selectArrays.js'
import { AddGift } from '../../actions/Gift.js'

class GiftModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectOne: null,
            selectTwo: null,
            selectThree: null,
            valSelectTwo: null,
            disSelectTwo: false,
            disSelectThree: false
        };
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

    addGift = () => {
        
        if(this.state.selectOne !== null && this.state.selectTwo !== null && this.state.selectThree !== null) {
            let data = new Object();
            data.category = this.state.selectOne;
            data.item = this.state.selectTwo.value;
            data.count = this.state.selectThree.value;
            data.cid = this.props.cardId;
            this.props.AddGift(data)
            this.setState({ selectOne : null, selectTwo : null, selectThree : null, disSelectTwo: false, disSelectThree: false })
            $('.close').click();
        }
    }

    render() {
        return(
            <div className='modal fade' id='exampleModal2' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Добавить подарок к событию</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <Row className="justify-content-center">
                                <Col xs={12} lg={4}>
                                <Select
                                        placeholder="Категория подарка"
                                        name="SelectOne"
                                        value={this.state.selectOne}
                                        options={category}
                                        onChange={(value) => this.changeSelectOne(value)}
                                    />
                                    
                                </Col>
                                <Col xs={12} lg={4}>
                                    { this.state.disSelectTwo && <Select
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
                        <div className='modal-footer'>
                            <button onClick={() => this.addGift()} type='button' className='btn btn-secondary'>Добавить подарок</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        gift: state.giftReducer
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddGift: AddGift }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(GiftModal);