import React, { useState } from 'react';
import SignInForm from '../../forms/log/SignInForm';
import SignUpForm from '../../forms/log/SignUpForm';

const UserAccount = () => {
  const [logModal, setLogModal] = useState(true)

  const toggleLogForms = () => {
    setLogModal(prevValue => !prevValue)
  }

  return (
    <div className='forms'>
      <div className='title-forms'>
        <h3 onClick={toggleLogForms}>Se connecter</h3>
        <h3 onClick={toggleLogForms}>S'inscrire</h3>
      </div>
      <div className='logForms'>
        {logModal ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default UserAccount;