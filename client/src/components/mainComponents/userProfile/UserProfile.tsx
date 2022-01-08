import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

interface UserProfileProps {
   userInfos: string | null;
}

const UserProfile = (props: UserProfileProps) => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.user);

   return (
      <div>
         <h3>coucou utilisateur numéro {userId}</h3>
         <p>{props.userInfos}</p>
      </div>
   );
};

export default UserProfile;
