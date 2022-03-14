import axios from 'axios';

//**Import enum action types */
import { FormActionType } from '../actionTypes/formActionType';

//**config var */
import globalConfig from '../../configuration/globalConfig';

//**Custom history object */
import myHistory from '../../utils/history';

//**Import from redux */
import { Dispatch } from 'redux';

interface parameters {
   name: string;
   firstName: string;
   email: string;
   age: string;
   sex: string;
   content: string;
}

//** CONTACT FORM */
export const getContactInfosAction = (params: parameters, ageConfirmed: boolean) => {
   const { name, firstName, email, age, sex, content } = params;

   const data = {
      name,
      firstName,
      email,
      age,
      sex,
      content,
      ageConfirmed,
   };

   return (dispatch: Dispatch) => {
      const request = axios.post(globalConfig.CONTACT_FORM, data);

      request.then((res) => {
         const { message } = res.data;
         if (res.status === 201) {
            dispatch({
               type: FormActionType.CONTACT_FORM_SUCCESS,
               payload: message,
            });
         } else if (res.status === 206) {
            const response = res.data;
            dispatch({
               type: FormActionType.CONTACT_FORM_UNCOMPLETED,
               payload: response,
            });
         } else if (res.status === 202) {
            dispatch({
               type: FormActionType.CONTACT_FORM_EMPTY,
               payload: message,
            });
         }
      });
   };
};

//**SIGN UP FORM */

interface signUp {
   name: string;
   firstName: string;
   email: string;
   password: string;
}

export const signUpFormAction = (params: signUp) => {
   const { name, firstName, email, password } = params;

   const data = {
      name,
      firstName,
      email,
      password,
   };

   return (dispatch: Dispatch) => {
      const request = axios.post(globalConfig.SIGN_UP_FORM, data);

      request.then((res) => {
         const { message, user } = res.data;
         if (res.status === 201) {
            dispatch({
               type: FormActionType.SIGN_UP_SUCCESS,
               payload: {
                  message,
                  user,
               },
            });
         } else if (res.status === 206) {
            const response = res.data;
            dispatch({
               type: FormActionType.SIGN_UP_UNCOMPLETED,
               payload: response,
            });
         } else if (res.status === 202) {
            dispatch({
               type: FormActionType.SIGN_UP_EMPTY,
               payload: message,
            });
         }
      });
   };
};

//**SIGN IN FORM*/

interface signIn {
   email: string;
   password: string;
}

export const signInFormAction = (params: signIn) => {
   const { email, password } = params;

   const data = {
      email,
      password,
   };

   return (dispatch: Dispatch) => {
      const request = axios.post(globalConfig.SIGN_IN_FORM, data, { withCredentials: true });

      request.then((res) => {
         if (res.status === 200) {
            localStorage.setItem('profile', JSON.stringify(res.data));
            localStorage.setItem('loggedIn', 'true');
            const { userData } = res.data;
            dispatch({
               type: FormActionType.SIGN_IN_SUCCESS,
               payload: userData,
            });
            myHistory.push('/profile');
         } else {
            dispatch({
               type: FormActionType.SIGN_IN_FAILED,
               payload: res.data,
            });
         }
      });
   };
};

//*GOOGLE AUTH*/
interface googleAuth {
   result: Object;
   token: string;
}

export const googleAuthAction = (params: googleAuth) => {
   const { result, token } = params;

   const data = {
      result,
      token,
   };

   return (dispatch: Dispatch) => {
      localStorage.setItem('profile', JSON.stringify({ data }));
      localStorage.setItem('loggedIn', 'true');
      dispatch({
         type: FormActionType.GOOGLE_AUTH,
         payload: data,
      });
      myHistory.push('/profile');
   };
};

//**LOGOUT */
export const logoutAction = () => {
   return (dispatch: Dispatch) => {
      axios.get(globalConfig.LOG_OUT);
      dispatch({
         type: FormActionType.LOGOUT,
      });
   };
};
