import { useSelector, RootStateOrAny } from 'react-redux';

interface UserProfileProps<T> {
   userInfos: T;
}

const UserProfile = <T extends object>({ userInfos }: UserProfileProps<T>) => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.user);

   console.log(userInfos);

   return (
      <div>
         <h3>coucou utilisateur numéro {userId}</h3>
      </div>
   );
};

export default UserProfile;
