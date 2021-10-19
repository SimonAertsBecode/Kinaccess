import React, { useState } from 'react';
import LogForm from '../../forms/log/LogForm';

const UserAccount = () => {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

   const [loggedIn, setloggedIn] = useState(localStorage.getItem('loggedIn'));

   return (
      <div>
         {loggedIn ? <h3>Hello {user.result?.givenName}</h3> : <LogForm />}
         {/* <p>{test} de nous</p> */}
      </div>
   );
};

export default UserAccount;
