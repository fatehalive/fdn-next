import { combineReducers } from 'redux';
import app from './app.reducer'
import currentUser from './current_user.reducer';
import preferences from './preferences.reducer';
import shopping from './shopping.reducer';

const rootReducer = combineReducers({
    app, 
    currentUser,
    preferences,
    shopping
 });

export default rootReducer;