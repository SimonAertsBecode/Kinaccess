import { useEffect, useState } from 'react';
import Users from '../../hooks/useUsersHook';

type userDetails = {
   name: string;
   firstName: string;
   email: string;
};

const UserProfile = () => {
   const [userInfo, setUserInfo] = useState<userDetails>();

   const userId = localStorage.getItem('userId');

   useEffect(() => {
      if (userId) Users.getUserInfo(userId, setUserInfo);
   }, [userId]);

   return (
      <section>
         {userInfo && (
            <>
               <h3>
                  Bonjour {userInfo.firstName} {userInfo.name}
               </h3>
               <p>Votre adresse mail est {userInfo.email}</p>
            </>
         )}
      </section>
   );
};

export default UserProfile;
