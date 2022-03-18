import { useEffect, useState } from 'react';

//*Import components
import LogForm from '../../components/forms/Log/LogForm';
import UserProfile from '../../components/mainComponents/UserProfile';

//*Redux related
import { useDispatch } from 'react-redux';
import * as Action from '../../store/actions/index';

const Profile = () => {
   const dispatch = useDispatch();

   const [localstorageUserId, setlocalstorageUserId] = useState<string | null>(localStorage.getItem('userId') || null);

   useEffect(() => {
      dispatch(Action.getUserInfo(localstorageUserId ? localstorageUserId.toString() : null));
   }, [localstorageUserId]);

   const storageEventHandler = () => {
      setlocalstorageUserId(localStorage.getItem('userId') || null);
      console.log('coucou');
   };

   window.addEventListener('storage', storageEventHandler, false);

   return <div>{false ? <UserProfile /> : <LogForm />}</div>;
};

export default Profile;
