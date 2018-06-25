const initialState = {
    changeProfile: false,
    pageSubcategories: "ps1",
    profileInformation: {
        login: "Muviez",
        email: "goryushin.andrey@yandex.ru",
        phone: "+79112792335",
        firstName: "Andre",
        lastName: "Gor",
        address: "Rustaveli d58 k1"
    }
}

export default function userProfile(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_PROFILE':
            return {...state, changeProfile: action.payload}
        case 'SAVE_PROFILE':
            return {...state, changeProfile: action.payload}
        case 'FIRST_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'SECOND_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'THIRD_TAB':
            return {...state, pageSubcategories: action.payload}
        case 'SAVE_PROFILE_INFO':
            return {...state, profileInformation: action.data}
        default:
            return state
    }
}