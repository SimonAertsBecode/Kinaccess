import axios from 'axios';

export const CONTACT_FORM_SUCCESS = '[KINACCESS] CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_FAILED = '[KINACCESS] CONTACT_FORM_FAILED';

export const getContactInfos = (params) => {
   const { name, firstName, email, age, sex, content } = params;

   const data = {
      name,
      firstName,
      email,
      age,
      sex,
      content,
   };

   console.log(data);

   return (dispatch) => {
      const request = axios.post('/contact-me', data);

      request.then((res) => {
         console.log(res);
         const result = res;
         dispatch({
            type: CONTACT_FORM_SUCCESS,
            payload: result,
         });
      });

      request.catch((err) => {
         console.log(err);
         const result = err;
         dispatch({
            type: CONTACT_FORM_FAILED,
            payload: result,
         });
      });
   };
};
