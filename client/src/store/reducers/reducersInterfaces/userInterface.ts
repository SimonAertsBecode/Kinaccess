import { userActionType } from '../../actions/actionTypes/userActionType';

interface getUser {
   success: {
      type: userActionType.GET_USER_DATA_SUCCESS;
      payload: {
         email: string;
         name: string;
         firstName: string;
      };
   };
   failed: {
      type: userActionType.GET_USER_DATA_FAILED;
      payload: string;
   };
   setDataNull: {
      type: userActionType.SET_USER_DATA_NULL;
      payload: null;
   };
}

export type getUserInterface = getUser['success'] | getUser['failed'] | getUser['setDataNull'];
