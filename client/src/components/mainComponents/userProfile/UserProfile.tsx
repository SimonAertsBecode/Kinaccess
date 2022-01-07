import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const UserProfile = () => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.user);

   return <div>coucou utilisateur numéro {userId}</div>;
};

export default UserProfile;
