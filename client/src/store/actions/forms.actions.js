import axios from 'axios';

//**config var */
import globalConfig from '../../configuration/globalConfig';

//** CONTACT FORM */
export const CONTACT_FORM_SUCCESS = '[KINACCESS] CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_UNCOMPLETED = '[KINACCESS] CONTACT_FORM_UNCOMPLETED';
export const CONTACT_FORM_EMPTY = '[KINACCESS] CONTACT_FORM_EMPTY';

export const getContactInfosAction = (params, ageConfirmed) => {
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

   return (dispatch) => {
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

export const signUpFormAction = (params) => {
   const { name, firstName, email, password } = params;

   const data = {
      name,
      firstName,
      email,
      password,
   };

   return (dispatch) => {
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

export const signInFormAction = (params) => {
   const { email, password } = params;

   const data = {
      email,
      password,
   };

   return (dispatch) => {
      const request = axios.post(globalConfig.SIGN_IN_FORM, data, { withCredentials: true });

      request.then((res) => {
         if (res.status === 200) {
            dispatch({
               type: SIGN_IN_SUCCESS,
               payload: res.data,
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

export const googleAuthAction = (params) => {
   const { result, token } = params;

   const data = {
      result,
      token,
   };

   return (dispatch) => {
      dispatch({
         type: GOOGLE_AUTH,
         payload: data,
      });
   };
};
