const textChangeReducer = (state = { text: 'Texto inicial...'}, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        default:
            return state
    }
}

export default textChangeReducer
