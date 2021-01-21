import { combineReducers } from 'redux'

import changeTextReducer from './changeTextReducer'
import changeNumberReducer from './changeNumberReducer'

export default combineReducers({
  changeTextReducer,
  changeNumberReducer
})
