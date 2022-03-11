import { RootStateOrAny, useSelector } from 'react-redux';

const UserProfile = () => {
   const userData = useSelector((state: RootStateOrAny) => state.formsReducer.signInForm.success?.user);

   const { name, firstName, email } = userData;

   return (
      <div>
         <h3>Bonjour {firstName}</h3>
      </div>
   );
};

export default UserProfile;
