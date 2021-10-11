import { combineReducers } from 'redux';
import formReducer from './forms.reducer';

const rootReducer = combineReducers({
   forms: formReducer,
});

export default rootReducer;
