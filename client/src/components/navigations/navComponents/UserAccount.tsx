import React, { useState } from 'react';
import LogForm from '../../forms/log/LogForm';
import UserProfile from '../../mainComponents/userProfile/UserProfile';

const UserAccount = () => {
   const [userId, setUserID] = useState(localStorage.getItem('profile') || null);

   const [loggedIn, setloggedIn] = useState(localStorage.getItem('loggedIn'));

   return <div>{loggedIn ? <UserProfile /> : <LogForm />}</div>;
};

export default UserAccount;
