import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './Card.jsx';
import GiftModal from './GiftModal.jsx';

class ReminderGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ""
        }
    }

    find = (e) => {
        this.setState({
            temp: e.target.value
        })     
    }
    
    
    render() {
        let temp = this.state.temp.toLowerCase();

        const defaultDisplay = () => {
            return(
                    this.props.reminder.map(function(key){
                        return (
                            <Card 
                                key={key.id}
                                id={key.id}
                                title={key.title}
                                datetime={key.datetime}
                                reason={key.reason}
                                towhom={key.towhom}
                                frequency={key.frequency}
                                remindForWeek={key.remindForWeek}
                                remindForMonth={key.remindForMonth}
                                remindForThreeMonth={key.remindForThreeMonth}
                            />
                        );
                    })
                
            );
        }

        const findingDisplay = () => {
            return (
                this.props.reminder.map(function(key, obj){
                        if(key.title.toLowerCase().includes(temp)) 
                            return (
                                <Card 
                                    key={key.id}
                                    id={key.id}
                                    title={key.title}
                                    datetime={key.datetime}
                                    reason={key.reason}
                                    towhom={key.towhom}
                                    frequency={key.frequency}
                                    remindForWeek={key.remindForWeek}
                                    remindForMonth={key.remindForMonth}
                                    remindForThreeMonth={key.remindForThreeMonth}
                                />
                            );
                        else return null;
                    })
            );
        }

        return (
            <div className="container">
                <input 
                    type="text" 
                    placeholder="Поиск" 
                    className="form-control search-input mb-5"
                    onChange={(e) => this.find(e)}
                />
                <div className="row">
                    {temp ? findingDisplay() : defaultDisplay()}
                    <GiftModal cardId={this.props.cardId.activeCardId} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        reminder: state.reminderReducer,
        cardId: state.cardIdReducer
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddCard: AddCard }, dispatch)
};

export default connect(mapStateToProps, null)(ReminderGrid);