import axios from 'axios';

//** CONTACT FORM */
export const CONTACT_FORM_SUCCESS = '[KINACCESS] CONTACT_FORM_SUCCESS';
export const CONTACT_FORM_UNCOMPLETED = '[KINACCESS] CONTACT_FORM_UNCOMPLETED';
export const CONTACT_FORM_EMPTY = '[KINACCESS] CONTACT_FORM_EMPTY';

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
console.error(`An unexpected error occured in contact form action`);
