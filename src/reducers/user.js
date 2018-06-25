const initialState = {
    isLogged: false
}

export default function loginUser(state = initialState, action) {
    switch(action.type) {
        case 'SET_LOGGED':
            return {...state, isLogged: action.payload}
        case 'UNSET_LOGGED':
            return {...state, isLogged: action.payload}
        default:
            return state
    }
}