const initialState = [
    {Step: false},
    {Step: false},
    {Step: false},
    {Step: false}
]

export default function wizardValidate(state = initialState, action) {
    switch(action.type) {
        case 'WIZARD_VALID_STEP_1':
            return {...state, Step: action.data}
        case 'WIZARD_VALID_STEP_2':
            return {...state, Step: action.data}
        case 'WIZARD_VALID_STEP_3':
            return {...state, Step: action.data}
        case 'WIZARD_VALID_STEP_4':
            return {...state, Step: action.data}
        default:
            return state
    }
}