import { combineReducers } from 'redux';
import signupReducer from './signup';


export default combineReducers({
    signup: signupReducer,
})