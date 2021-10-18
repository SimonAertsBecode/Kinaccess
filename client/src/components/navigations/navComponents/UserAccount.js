import React, { useState } from 'react';
import SignInForm from '../../forms/log/SignInForm';
import SignUpForm from '../../forms/log/SignUpForm';

const UserAccount = () => {
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

export default UserAccount;
