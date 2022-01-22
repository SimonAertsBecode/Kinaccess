import { useSelector, RootStateOrAny } from 'react-redux';

interface UserProfileProps {
   userInfos: string | null;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.user);

   return (
      <div>
         <h3>coucou utilisateur numéro {userId}</h3>
      </div>
   );
};

export default UserProfile;
