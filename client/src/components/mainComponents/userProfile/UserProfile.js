import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
   const userId = useSelector((kinaccess) => kinaccess.formsReducer.signInForm.success.user);

   return <div></div>;
};

export default UserProfile;
