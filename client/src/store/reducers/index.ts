import { combineReducers } from 'redux';
import formsReducer from './forms.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
   formsReducer,
   userReducer,
});

export default rootReducer;
