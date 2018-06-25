const initialState = {
    Step_1_obj: {},
    Step_2_obj: {},
    Step_3_obj: {},
    Step_4_obj: {},
    Finish_obj: {}
}

function funcReminderReducer (state) {
    return Object.assign({}, state.Step_1_obj, state.Step_2_obj, state.Step_3_obj, state.Step_4_obj);
}

export default function wizardStep(state = initialState, action) {
    switch(action.type) {
        case 'WIZARD_STEP_1':
            return {...state, Step_1_obj: action.data}
        case 'WIZARD_STEP_2':
            return {...state, Step_2_obj: action.data}
        case 'WIZARD_STEP_3':
            return {...state, Step_3_obj: action.data}
        case 'WIZARD_STEP_4':
            return {...state, Step_4_obj: action.data}
        case 'WIZARD_FINISH':
            return {...state, Finish_obj: funcReminderReducer(state)}
        default:
            return state
    }
}