import { useSelector, RootStateOrAny } from 'react-redux';

const UserProfile = () => {
   const userInfo = useSelector((kinnacess: RootStateOrAny) => kinnacess.userReducer.user.success);

   if (!userInfo) return null;

   const { name, firstName, email } = userInfo;

   return (
      <section className='user-profile'>
         <h3>
            Hello {firstName} {name}
         </h3>
         <p>Is your mail adress still {email}</p>
      </section>
   );
};

export default UserProfile;
