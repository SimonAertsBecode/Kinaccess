import { combineReducers } from 'redux';
import formsReducer from './forms.reducer';

const rootReducer = combineReducers({
   formsReducer,
});

export default rootReducer;
