const changeNumberReducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case 'SUM_NUMBER':
      return { ...state, number: state.number + 1 }
    case 'SUB_NUMBER':
      return { ...state, number: state.number - 1 }
    case 'DEFAULT_NUMBER':
      return { ...state, number: 0 }
    default:
      return state
  }
}

export default changeNumberReducer
