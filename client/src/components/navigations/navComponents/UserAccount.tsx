//*Import components
import LogForm from '../../forms/log/LogForm';
import UserProfile from '../../mainComponents/userProfile/UserProfile';

//*React related
import { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const UserAccount = () => {
   const [user] = useState(localStorage.getItem('profile') || null);

   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);

   return <div>{loggedIn ? <UserProfile userInfos={user} /> : <LogForm />}</div>;
};

export default UserAccount;
