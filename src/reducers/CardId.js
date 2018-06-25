export default function cardIdReducer(state = {}, action) {
    switch(action.type) {
        case 'ADD_CARD_ID':
            return {activeCardId: action.id}; 

        default:
            return state;
    }
}