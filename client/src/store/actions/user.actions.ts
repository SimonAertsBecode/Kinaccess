import axios from 'axios';

//**Import enum action types */
import { userActionType } from './actionTypes/userActionType';

//**config var */
import usersConstant from '../../constants/usersConstant';

//**Import from redux */
import { Dispatch } from 'redux';

export const getUserInfo = (id: string) => {
   let url = `${usersConstant.USER_API}${JSON.parse(id)}`;

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
};
