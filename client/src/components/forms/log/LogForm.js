import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const LogForm = () => {
   const [logModal, setLogModal] = useState(true);

   const toggleLogForms = (value) => {
      setLogModal(value);
   };

   return (
      <div className='forms'>
         <div className='title-forms'>
            <h3
               onClick={() => {
                  toggleLogForms(true);
               }}
            >
               S'inscrire
            </h3>
            <h3
               onClick={() => {
                  toggleLogForms(false);
               }}
            >
               Se connecter
            </h3>
         </div>
         <div className='logForms'>{logModal ? <SignUpForm /> : <SignInForm />}</div>
      </div>
   );
};

export default LogForm;
