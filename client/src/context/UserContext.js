import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
   const [contactFormValues, setContactFormValue] = useState({
      name: '',
      firstName: '',
      email: '',
      age: '',
      sex: '',
      content: '',
   });

   const [signInFormValues, setSignInFormValues] = useState({
      name: '',
      firstName: '',
      email: '',
      password: '',
      password2: '',
   });

   return (
      <UserContext.Provider value={([contactFormValues, setContactFormValue], [signInFormValues, setSignInFormValues])}>
         {props.children}
      </UserContext.Provider>
   );
};
