import axios from 'axios';

export const CONTACT_FORM = '[KINACCESS] CONTACT_FORM';

export const getContactInfos = (params) => {
   const { name, firstName, email, age, gender, content } = params;

   const data = {
      name,
      firstName,
      email,
      age,
      gender,
      content,
   };

   console.log(data);

   return (dispatch) => {
      //       const request = axios.post('/contact-me', data);

      //       request.then((res) => {
      //          console.log(res);
      //       });

      //       request.catch((err) => {
      //          console.log(err);
      //       });

      dispatch({
         type: CONTACT_FORM,
      });
   };
};
