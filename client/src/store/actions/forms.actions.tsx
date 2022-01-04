import axios from 'axios';

//**config var */
import globalConfig from '../../configuration/globalConfig';

import myHistory from '../../utils/history';

interface parameters {
   name: string;
   firstName: string;
   email: string;
   age: string;
   sex: string;
   content: string;
}

//** CONTACT FORM */
export const CONTACT_FORM_SUCCESS = '[KINACCESS] CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_UNCOMPLETED = '[KINACCESS] CONTACT_FORM_UNCOMPLETED';
export const CONTACT_FORM_EMPTY = '[KINACCESS] CONTACT_FORM_EMPTY';

export const getContactInfosAction = (params: parameters, ageConfirmed: boolean) => {
   const { name, firstName, email, age, sex, content } = params;
   console.log(typeof age);

   const data = {
      name,
      firstName,
      email,
      age,
      sex,
      content,
      ageConfirmed,
   };

   return (dispatch: any) => {
      const request = axios.post(globalConfig.CONTACT_FORM, data);

      request.then((res) => {
         const { message } = res.data;
         if (res.status === 201) {
            dispatch({
               type: CONTACT_FORM_SUCCESS,
               payload: message,
            });
         } else if (res.status === 206) {
            const response = res.data;
            dispatch({
               type: CONTACT_FORM_UNCOMPLETED,
               payload: response,
            });
         } else if (res.status === 202) {
            dispatch({
               type: CONTACT_FORM_EMPTY,
               payload: message,
            });
         }
      });
   };
};

//**SIGN UP FORM */
export const SIGN_UP_SUCCESS = '[KINACCESS] SIGN_UP_SUCCESS';
export const SIGN_UP_UNCOMPLETED = '[KINACCESS] SIGN_UP_UNCOMPLETED';
export const SIGN_UP_EMPTY = '[KINACCESS] SIGN_UP_EMPTY';

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

   return (dispatch: any) => {
      const request = axios.post(globalConfig.SIGN_UP_FORM, data);

      request.then((res) => {
         const { message, user } = res.data;
         if (res.status === 201) {
            dispatch({
               type: SIGN_UP_SUCCESS,
               payload: {
                  message,
                  user,
               },
            });
         } else if (res.status === 206) {
            const response = res.data;
            dispatch({
               type: SIGN_UP_UNCOMPLETED,
               payload: response,
            });
         } else if (res.status === 202) {
            dispatch({
               type: SIGN_UP_EMPTY,
               payload: message,
            });
         }
      });
   };
};

//**SIGN IN FORM*/
export const SIGN_IN_SUCCESS = '[KINACCESS] SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = '[KINACCESS] SIGN_IN_FAILED';

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

   return (dispatch: any) => {
      const request = axios.post(globalConfig.SIGN_IN_FORM, data, { withCredentials: true });

      request.then((res) => {
         if (res.status === 200) {
            dispatch({
               type: SIGN_IN_SUCCESS,
               payload: res.data.user,
            });
         } else {
            dispatch({
               type: SIGN_IN_FAILED,
               payload: res.data,
            });
         }
      });
   };
};

//*GOOGLE AUTH*/
export const GOOGLE_AUTH = '[KINACCESS] GOOGLE_AUTH';

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

   return (dispatch: any) => {
      dispatch({
         type: GOOGLE_AUTH,
         payload: data,
      });
   };
};
