//*Import components
import LogForm from '../../forms/log/LogForm';
import UserProfile from '../../mainComponents/UserProfile';

//*React related
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const UserAccount = () => {
   const [user, setUser] = useState(localStorage.getItem('profile') || null);

   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);

   useEffect(() => {
      localStorage.getItem('profile') ? setUser(localStorage.getItem('profile')) : setUser(null);
   }, [loggedIn]);

   return <div>{loggedIn ? <UserProfile userInfos={user ? JSON.parse(user) : null} /> : <LogForm />}</div>;
};

export default UserAccount;
