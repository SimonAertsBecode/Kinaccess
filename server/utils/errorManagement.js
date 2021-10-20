const formsError = {};

formsError.signUpError = (err) => {
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

formsError.contactFormError = (err) => {
   let errorMessages = {
      name: '',
      firstName: '',
      email: '',
      age: '',
      content: '',
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
      case err.message.includes('email'):
         errorMessages.email = "cet email n'est pas valide";
         break;
      case err.message.includes('Birth'):
         errorMessages.age = "La date de naissance que vous avez sélectionnée n'est pas valide";
         break;
      case err.message.includes('content'):
         if (err.message.includes('required')) {
            errorMessages.content = 'Un contenu est nécessaire';
         }
         break;
      default:
         errorMessages.name = '';
         errorMessages.firstName = '';
         errorMessages.email = '';
         errorMessages.content = '';
   }

   return errorMessages;
};

formsError.signInError = (err) => {
   let errorMessages = {
      email: '',
      password: '',
   };

   switch (err.message !== undefined) {
      case err.message.includes('email'):
         errorMessages.email = err.message;
         break;
      case err.message.includes('passe'):
         errorMessages.password = err.message;
         break;
      default:
         errorMessages.email = '';
         errorMessages.password = '';
   }

   return errorMessages;
};

export default formsError;
