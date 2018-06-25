export const ChangeProfile = () => {
    return {
        type: "CHANGE_PROFILE",
        payload: true
    }
}

export const SaveProfile = () => {
    return {
        type: "SAVE_PROFILE",
        payload: false
    }
}

export const FirtsTab = () => {
    return {
        type: "FIRST_TAB",
        payload: "ps1"
    }
}

export const SecondTab = () => {
    return {
        type: "SECOND_TAB",
        payload: "ps2"
    }
}

export const ThirdTab = () => {
    return {
        type: "THIRD_TAB",
        payload: "ps3"
    }
}

export const SaveProfData = data => {
    return {
        type: "SAVE_PROFILE_INFO",
        data
    }
}
