import { getUserInterface } from './reducersInterfaces/userInterface';
import { userActionType } from '../actions/actionTypes/userActionType';

const initialState = {
   user: {
      success: null,
      failed: null,
   },
};

const userReducer = (state = initialState, action: getUserInterface) => {
   switch (action.type) {
      case userActionType.GET_USER_DATA_SUCCESS:
         return {
            ...state,
            user: {
               success: action.payload,
               failed: null,
            },
         };
      case userActionType.GET_USER_DATA_FAILED:
         return {
            ...state,
            user: {
               success: null,
               failed: action.payload,
            },
         };
      case userActionType.SET_USER_DATA_NULL:
         return {
            ...state,
            user: {
               success: null,
               failed: null,
            },
         };
      default:
         return state;
   }
};

export default userReducer;
