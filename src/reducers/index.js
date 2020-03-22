import currentUser from './currentUser'

// Combine all Reducers
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentUser
})

export default rootReducer