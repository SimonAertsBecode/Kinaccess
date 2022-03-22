import { useEffect } from 'react';

//*Redux imports related
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import * as Action from '../../store/actions/index';

const UserProfile = () => {
   const dispatch = useDispatch();
   const userInfo = useSelector((kinnacess: RootStateOrAny) => kinnacess.userReducer.user.success);

   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.userId);

   useEffect(() => {
      dispatch(Action.getUserInfo(userId));
   }, [userId, dispatch]);

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
