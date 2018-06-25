import React from 'react'
import Select from 'react-select';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SweetAlert from "react-bootstrap-sweetalert";

import { frequencyOfReminder, reasonSelect, whomSelect } from "../../arrays/selectArrays.js";
import { EditCard, DeleteCard } from './../../actions/ReminderCard.js'
import { AddCardId } from './../../actions/CardId.js'
import Gift from './Gift.jsx'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,

            ReminderInputs: {
                title: this.props.title,
                reason: this.props.reason,
                towhom: this.props.towhom,
                datetime: this.props.datetime,
                frequency: this.props.frequency,
                remindForWeek: this.props.remindForWeek || false,
                remindForMonth: this.props.remindForMonth || false,
                remindForThreeMonth: this.props.remindForThreeMonth || false
            }
        }
    }

    selectRus = () => {
        switch(this.props.reason) {
            case "newYear":
                return "Новый год"
            case "birthday":
                return "День Рождения"
            case "anniversary":
                return "Юбилей"
            case "valentineDay":
                return "14 Февраля"
            case "womenDay":
                return "8 Марта"
            case "defenderDay":
                return "23 Февраля"
            case "wedding":
                return "Свадьба"
            case "knowledgeDay":
                return "1 Сентября"
            case "springDay":
                return "1 Мая"
            case "victoryDay":
                return "9 Мая"
            case "yearly":
                return "Годовщина"
            default:
                return "";
        }
    }
    
    editingCard = () => {
        this.setState({ editing: true });
    }

    closeCard = () => {
        this.setState({ editing: false });
    }

    saveCard = () => {
        this.setState({ editing: false });
        this.props.EditCard(this.props.id, this.state.ReminderInputs);
    }

    changeTitle = (e) => {
        let d = this.state.ReminderInputs;
        d.title = e.target.value;
        this.setState({ d });
    }

    changeDate = () => {
        let d = this.state.ReminderInputs;
        d.datetime = document.getElementById("datetimepicker").value;
        this.setState({ d });
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

    warningOnDelete() {
        this.setState({
            alert: (
            <SweetAlert
                warning
                style={{ display: "block" }}
                title="Вы уверены?"
                onConfirm={() => this.successDeleteCard()}
                onCancel={() => this.hideAlert()}
                confirmBtnBsStyle="info"
                cancelBtnBsStyle="danger"
                confirmBtnText="Да, удалить!"
                cancelBtnText="Отмена"
                showCancel
            >
                Вы не сможете восстановить эту карточку!
            </SweetAlert>
            )
        });
    }

    successDeleteCard() {
        this.props.DeleteCard(this.props.id);
        this.setState({
            alert: null
        });
    }

    hideAlert() {
        this.setState({
          alert: null
        });
    }
 
    renderDisplay = () => {
        const cID = this.props.id;
        return(
            <div key={this.props.id} className="col-lg-4 mb-4">
                {this.state.alert}
                <div className="card card-blog" data-background-color="orange">
                    <div className="card-body">
                        <h6 className="card-category text-success">
                            {this.selectRus()}
                        </h6>

                        <button className="edit-card-btn" onClick={this.editingCard}><i className="now-ui-icons ui-1_settings-gear-63"></i></button>
                        <button className="remove-card-btn" onClick={() => this.warningOnDelete()}><i className="now-ui-icons ui-1_simple-remove"></i></button>

                        <h5 className="card-title">
                            <a href="#pablo">{this.props.title}</a>
                        </h5>
                        <div className="stats">
                            <i aria-hidden="true" className="fa fa-clock-o"></i> {this.props.datetime}
                        </div>

                        <hr />
                        
                        {this.props.gift.map(function(obj){
                            if(obj.cid === cID) {
                                return (
                                    <Gift
                                        key={obj.id}
                                        id={obj.id}
                                        category={obj.category}
                                        item={obj.item}
                                        count={obj.count}
                                    />
                                );
                            }
                            else
                                return null;
                        })}

                        <div className="card-footer text-center">
                            <button className="btn btn-default btn-round" onClick={() => this.props.AddCardId(this.props.id)} data-toggle="modal" data-target="#exampleModal2">Добавить подарок</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFormEditing = () => {
        return(
            <div className="col-lg-4 mb-4">
                <div className="card card-notify">
                    <div className="card-body content-danger">
                        <input type="text" className="form-control" onChange={(e) => this.changeTitle(e)} value={this.state.ReminderInputs.title}/>
                        <Datetime
                            dateFormat="DD/MM/YYYY"
                            locale="ru"
                            inputProps={{placeholder:"   Дата и время", id: "datetimepicker"}}
                            defaultValue={this.props.datetime}
                            onBlur={() => this.changeDate()}
                            className="my-4"
                        />
                        <Select
                            placeholder="Повод"
                            name="reason"
                            value={this.state.ReminderInputs.reason}
                            options={reasonSelect}
                            onChange={(value) => this.changeReason(value)}
                            className="my-4"
                            clearable={false}
                        />
                        <Select
                            placeholder="Кому"
                            name="toWhom"
                            value={this.state.ReminderInputs.towhom}
                            options={whomSelect}
                            onChange={(value) => this.changeToWhom(value)}
                            className="my-4"
                        />
                        <Select
                            placeholder="  Переодичность напоминаний"
                            name="frequency"
                            value={this.state.ReminderInputs.frequency}
                            options={frequencyOfReminder}
                            onChange={(value) => this.changeFrequency(value)}
                            className="my-4"
                        />
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForWeek" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.state.ReminderInputs.remindForWeek} />
                                <span className="form-check-sign"></span>
                                <div>За неделю</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.state.ReminderInputs.remindForMonth} />
                                <span className="form-check-sign"></span>
                                <div>За месяц</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForThreeMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.state.ReminderInputs.remindForThreeMonth} />
                                <span className="form-check-sign"></span>
                                <div>За 3 месяца</div>
                            </label>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={this.saveCard} className="btn btn-success btn-round">Save</button>
                            <button onClick={this.closeCard} className="btn btn-danger btn-round">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderFormEditing() : this.renderDisplay();
    }
}

function mapStateToProps(state){
    return {
        reminder: state.reminderReducer,
        gift: state.giftReducer
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { EditCard: EditCard }, { DeleteCard: DeleteCard }, { AddCardId: AddCardId }), dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);