import { FormActionType } from '../../actionTypes/formActionType';

//* ContactForm interface
interface ContactForm {
   success: {
      type: FormActionType.CONTACT_FORM_SUCCESS;
      payload: string;
   };

   uncompleted: {
      type: FormActionType.CONTACT_FORM_UNCOMPLETED;
      payload: {
         name: string;
         firstName: string;
         email: string;
         age: string;
         content: string;
      };
   };

   empty: {
      type: FormActionType.CONTACT_FORM_EMPTY;
      payload: string;
   };
}

//* SignUp interface
interface SignUpForm {
   success: {
      type: FormActionType.SIGN_UP_SUCCESS;
      payload: {
         message: string;
         user: string;
      };
   };

   uncompleted: {
      type: FormActionType.SIGN_UP_UNCOMPLETED;
      payload: {
         name: string;
         firstName: string;
         email: string;
         password: string;
      };
   };

   empty: {
      type: FormActionType.SIGN_UP_EMPTY;
      payload: string;
   };
}

//*SignIn interface
interface SignInForm {
   success: {
      type: FormActionType.SIGN_IN_SUCCESS;
      payload: string;
   };

   failed: {
      type: FormActionType.SIGN_IN_FAILED;
      payload: {
         email: string;
         password: string;
      };
   };
}

//*Google Auth
interface GoogleAuth {
   type: FormActionType.GOOGLE_AUTH;
   payload: {};
}

//*Logout
interface Logout {
   type: FormActionType.LOGOUT;
}

export type ContactAction = ContactForm['success'] | ContactForm['uncompleted'] | ContactForm['empty'];
export type SignUpAction = SignUpForm['success'] | SignUpForm['uncompleted'] | SignUpForm['empty'];
export type SignInAction = SignInForm['success'] | SignInForm['failed'];
export type GoogleAuthAction = GoogleAuth;
export type LogoutACtion = Logout;
