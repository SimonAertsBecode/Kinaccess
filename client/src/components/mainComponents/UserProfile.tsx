import React from 'react';
import {useSelector, RootStateOrAny} from 'react-redux'

const UserProfile = React.memo(() => {

    const userInfo = useSelector((kinaccess: RootStateOrAny) => kinaccess.userReducer.user.success);

   const { name, firstName, email } = userInfo;

   return (
      <section className='user-profile'>
         <h1>
            Bonjour {firstName} {name}
         </h1>
         <p>Votre adresse mail est toujours: {email} ?</p>
      </section>
   );
});

export default UserProfile;
