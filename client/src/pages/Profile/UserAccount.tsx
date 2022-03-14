//*Import components
import LogForm from '../../components/forms/Log/LogForm';
import UserProfile from '../../components/MainComponents/UserProfile';

//*React related
import { useSelector, RootStateOrAny } from 'react-redux';

const UserAccount = () => {
   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);

   return <div>{loggedIn ? <UserProfile /> : <LogForm />}</div>;
};

export default UserAccount;
