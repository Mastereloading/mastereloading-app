const textChangeReducer = (state = { text: 'Texto inicial...' }, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.text }
        case 'DEFAULT_TEXT':
            return { ...state, text: 'Mensagem padrão React-Redux' }
        default:
            return state
    }
}

export default textChangeReducer
