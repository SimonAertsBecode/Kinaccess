import axios from 'axios';

//**Import enum action types */
import { userActionType } from './actionTypes/userActionType';

//**config var */
import usersConstant from '../../constants/usersConstant';

//**Import from redux */
import { Dispatch } from 'redux';

export const getUserInfo = (id: string | null) => {
   if (id) {
      id = JSON.parse(id);
      let url = `${usersConstant.USER_API}${id}`;

      return async (dispatch: Dispatch) => {
         try {
            const request = await axios.get(url);
            dispatch({
               type: userActionType.GET_USER_DATA_SUCCESS,
               payload: request.data,
            });
         } catch (error: any) {
            dispatch({
               type: userActionType.GET_USER_DATA_FAILED,
               payload: error.message,
            });
         }
      };
   } else {
      return (dispatch: Dispatch) => {
         dispatch({
            type: userActionType.SET_USER_DATA_NULL,
            payload: null,
         });
      };
   }
};
