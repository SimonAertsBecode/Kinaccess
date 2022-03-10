interface UserProfileProps<T> {
   userInfos: T | null;
}

const UserProfile = <T extends object>({ userInfos }: UserProfileProps<T>) => {


   return (
      <div>
         <h3>coucou utilisateur numéro {}</h3>
      </div>
   );
};

export default UserProfile;
