import React from 'react'

import ReminderEditor from './ReminderEditor.jsx';
import ReminderGrid from './ReminderGrid.jsx';

class Board extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="container-fluid mt-block">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-7 col-sm-6 mb-remEditor">
                        <ReminderEditor />
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-5 col-sm-6">
                        <ReminderGrid />
                    </div>
                </div>
            </div>            
        );
    }

}

export default Board;