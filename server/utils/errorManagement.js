const authError = {};

authError.signUpError = (err) => {
   let errorMessages = {
      name: '',
      firstName: '',
      email: '',
      password: '',
   };

   switch (err.message !== undefined) {
      case err.message.includes('name'):
         if (err.message.includes('required')) {
            errorMessages.name = 'Un nom est requis';
         } else {
            errorMessages.name = 'Votre nom doit faire au minimun 3 caractères';
         }
         break;
      case err.message.includes('firstName'):
         if (err.message.includes('required')) {
            errorMessages.firstName = 'Un prénom est requis';
         } else {
            errorMessages.firstName = 'Votre prénom doit faire au minimun 3 caractères';
         }
         break;
      case err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'):
         errorMessages.email = 'Cet email est déjà utilisé';
         break;
      case err.message.includes('email'):
         errorMessages.email = "cet email n'est pas valide";
         break;
      case err.message.includes('password'):
         if (err.message.includes('required')) {
            errorMessages.password = 'Un mot de passe est requis';
         } else {
            errorMessages.password = 'Votre mot de passe doit faire au minimum 6 caractères';
         }
         break;
      default:
         errorMessages.name = '';
         errorMessages.firstName = '';
         errorMessages.email = '';
         errorMessages.password = '';
   }

   return errorMessages;
};

export default authError;
