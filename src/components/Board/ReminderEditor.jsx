import React from 'react'
import {
    Row, Col
} from 'reactstrap';
import FormInputs from '../../FormInputs.jsx';
import Select from 'react-select';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCard } from '../../actions/ReminderCard.js';
import { frequencyOfReminder, reasonSelect, whomSelect } from "../../arrays/selectArrays.js";

class ReminderEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            emptyInputError: "",
            ReminderInputs: {
                title: "",
                reason: "",
                towhom: "",
                datetime: "",
                frequency: "",
                remindForWeek: false,
                remindForMonth: false,
                remindForThreeMonth: false
            }
        }
    }

    AddCardFunc = () => {
        let state = this.state;
        if( this.state.ReminderInputs.title !== "" && this.state.ReminderInputs.reason !== "" && this.state.ReminderInputs.towhom !== "" &&
            this.state.ReminderInputs.datetime !== "" && this.state.ReminderInputs.frequency !== "" ) {
                this.props.AddCard(this.state.ReminderInputs);
                state.emptyInputError = "";
                state.ReminderInputs.title = "";
                state.ReminderInputs.reason = "";
                state.ReminderInputs.towhom = "";
                state.ReminderInputs.datetime = null;
                state.ReminderInputs.frequency = "";
                state.ReminderInputs.remindForWeek = false;
                state.ReminderInputs.remindForMonth = false;
                state.ReminderInputs.remindForThreeMonth = false;
            }
        else {
            state.emptyInputError = "Заполните поля со звездочкой!"; 
        }
        this.setState({ state });
    }
   
    changeDate = () => {
        let d = this.state.ReminderInputs;
        d.datetime = document.getElementById("datatimepicker").value;
        this.setState({ d });
    }

    changeCheckbox = (event) => {
        let state = this.state.ReminderInputs;
        switch(event.target.name) {
            case "remindForWeek":
                state.remindForWeek = event.target.checked;
                this.setState({state});
                break;
            case "remindForMonth":
                state.remindForMonth = event.target.checked;
                this.setState({state});
                break;
            case "remindForThreeMonth":
                state.remindForThreeMonth = event.target.checked;
                this.setState({state});
                break;
        }
    }

    changeTitle = (event) => {
        let state = this.state.ReminderInputs;
        state.title = event.target.value;
        this.setState({state});
    }

    changeReason = (value) => {
        let state = this.state.ReminderInputs;
        state.reason = value.value;
        this.setState({state});
    }

    changeToWhom = (value) => {
        let state = this.state.ReminderInputs;
        state.towhom = value.value;
        this.setState({state});
    }

    changeFrequency = (value) => {
        let state = this.state.ReminderInputs;
        state.frequency = value.value;
        this.setState({state});
    }

    render() {
        return (
            <div className="card">
                <div className="card-body card_content">
                    <p className="card-title">
                        Добавить событие
                    </p>
                    <form>
                        <div className="input-group">
                            <span className="input-group-addon">
                            <i className="now-ui-icons icons-form users_circle-08"></i>
                            </span>
                            <input name="title" value={this.state.ReminderInputs.title} onChange={(value) => this.changeTitle(value)} type="text" className="form-control" placeholder="Заголовок *" />
                        </div>
                        <Select
                            placeholder="Повод *"
                            name="reason"
                            value={this.state.ReminderInputs.reason}
                            options={reasonSelect}
                            onChange={(value) => this.changeReason(value)}
                            className="my-4"
                        />
                        <Select
                            placeholder="Кому *"
                            name="toWhom"
                            value={this.state.ReminderInputs.towhom}
                            options={whomSelect}
                            onChange={(value) => this.changeToWhom(value)}
                            className="my-4"
                        />
                        <Row className="mb-5">
                            <Col xs={5} >
                                <Datetime
                                    dateFormat="DD/MM/YYYY"
                                    locale="ru"
                                    inputProps={{placeholder:"   Дата и время *", id: "datatimepicker"}}
                                    onBlur={() => this.changeDate()}
                                    value={this.state.ReminderInputs.datetime}
                                />
                            </Col> 
                            <Col xs={7} className="pl-1">
                                <Select
                                    placeholder="  Переодичность напоминаний *"
                                    name="frequency"
                                    value={this.state.ReminderInputs.frequency}
                                    options={frequencyOfReminder}
                                    onChange={(value) => this.changeFrequency(value)}
                                />
                            </Col>
                        </Row>
                        <p className="card-pricing">{this.state.emptyInputError}</p>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForWeek" checked={this.state.ReminderInputs.remindForWeek} onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                <span className="form-check-sign"></span>
                                <div>За неделю</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForMonth" checked={this.state.ReminderInputs.remindForMonth} onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                <span className="form-check-sign"></span>
                                <div>За месяц</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForThreeMonth" checked={this.state.ReminderInputs.remindForThreeMonth} onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                <span className="form-check-sign"></span>
                                <div>За 3 месяца</div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={this.AddCardFunc}
                    >Добавить карточку</button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        addCardRem: state.addReminder
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddCard: AddCard }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderEditor);