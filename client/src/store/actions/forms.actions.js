import axios from 'axios';

//**config var */
import globalConfig from '../../configuration/globalConfig';

//** CONTACT FORM */
export const CONTACT_FORM_SUCCESS = '[KINACCESS] CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_UNCOMPLETED = '[KINACCESS] CONTACT_FORM_UNCOMPLETED';
export const CONTACT_FORM_EMPTY = '[KINACCESS] CONTACT_FORM_EMPTY';

export const getContactInfos = (params, ageConfirmed) => {
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

export const signUpForm = (params) => {
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
export const SIGN_IN_UNCOMPLETED = '[KINACCESS] SIGN_IN_UNCOMPLETED';
export const SIGN_IN_EMPTY = '[KINACCESS] SIGN_IN_EMPTY';

export const signInForm = (params) => {
   const { email, password } = params;

   const data = {
      email,
      password,
   };

   return (dispatch) => {
      const request = axios.post(globalConfig.SIGN__IN_FORM, data);

      request.then((res) => {
         // const { message, user } = res.data;
         // if (res.status === 201) {
         //    dispatch({
         //       type: SIGN_UP_SUCCESS,
         //       payload: {
         //          message,
         //          user,
         //       },
         //    });
         // } else if (res.status === 206) {
         //    const response = res.data;
         //    dispatch({
         //       type: SIGN_UP_UNCOMPLETED,
         //       payload: response,
         //    });
         // } else if (res.status === 202) {
         //    dispatch({
         //       type: SIGN_UP_EMPTY,
         //       payload: message,
         //    });
         // }
         console.log(res);
      });
   };
};
