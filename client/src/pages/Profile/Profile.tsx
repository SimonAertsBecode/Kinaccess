import { useEffect } from 'react';

//*Import components
import LogForm from '../../components/forms/Log/LogForm';
import UserProfile from '../../components/mainComponents/UserProfile';

//*Redux related
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import * as Action from '../../store/actions/index';

const Profile = () => {
   const dispatch = useDispatch();

   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.userId);

   useEffect(() => {
      dispatch(Action.getUserInfo(userId));
   }, [userId, dispatch]);

   return <div>{userId ? <UserProfile /> : <LogForm />}</div>;
};

export default Profile;
