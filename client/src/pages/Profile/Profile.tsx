//*Import components
import LogForm from '../../components/forms/Log/LogForm';
import UserProfile from '../../components/mainComponents/UserProfile';

//*Redux related
import { RootStateOrAny, useSelector } from 'react-redux';

const Profile = () => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.userId);

   return <div>{userId ? <UserProfile /> : <LogForm />}</div>;
};

export default Profile;
