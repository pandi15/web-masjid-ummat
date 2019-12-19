import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rooterReducers = combineReducers({
  form: formReducer
})

export default rooterReducers
