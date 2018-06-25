const initialState = [
    {   
        id: 1, 
        title: "Birthday", 
        reason: "birthday", 
        towhom: "mother", 
        datetime: "06/04/2018 0:00", 
        frequency: "every-year", 
        remindForWeek: true 
    }
]

function funcReminderReducer (state = {}, action) {
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return {
                id: action.id,
                title: action.title,
                reason: action.reason,
                towhom: action.towhom,
                datetime: action.datetime,
                frequency: action.frequency,
                remindForWeek: action.remindForWeek,
                remindForMonth: action.remindForMonth,
                remindForThreeMonth: action.remindForThreeMonth,
                gifts: []
            };
        case 'EDIT_REMINDER_CARD':
            if (state.id !== action.id) {
                return state;
            }
    
            return Object.assign({}, state, {
                title: action.title,
                reason: action.reason,
                towhom: action.towhom,
                datetime: action.datetime,
                frequency: action.frequency,
                remindForWeek: action.remindForWeek,
                remindForMonth: action.remindForMonth,
                remindForThreeMonth: action.remindForThreeMonth,
            });
        
        default:
            return state;
    }
}

export default function reminderReducer(state = initialState, action) { 
    switch(action.type) {
        case 'ADD_REMINDER_CARD':
            return [...state, funcReminderReducer(undefined, action)];

        case 'DELETE_REMINDER_CARD':
            const index = state.findIndex(reminder => reminder.id === action.id);
            return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
            ];

        case 'EDIT_REMINDER_CARD':
            return state.map(reminder => funcReminderReducer(reminder, action));
            
        default:
            return state;
    }
}