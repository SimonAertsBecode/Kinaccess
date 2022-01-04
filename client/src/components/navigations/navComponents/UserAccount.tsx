import React, { useState } from 'react';
import LogForm from '../../forms/log/LogForm';
import UserProfile from '../../mainComponents/userProfile/UserProfile';

const UserAccount = () => {
   // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

   const [loggedIn, setloggedIn] = useState(localStorage.getItem('loggedIn'));

   return (
      <div>
         {loggedIn ? <UserProfile /> : <LogForm />}
         {/* <p>{test} de nous</p> */}
      </div>
   );
};

export default UserAccount;
