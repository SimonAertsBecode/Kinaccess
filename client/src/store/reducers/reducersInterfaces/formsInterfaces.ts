import { FormActionType } from '../../actionTypes/formActionType';

//* ContactForm interfaces
interface ContactFormSucces {
   type: FormActionType.CONTACT_FORM_SUCCESS;
   payload: string;
}

interface ContactFormUncompleted {
   type: FormActionType.CONTACT_FORM_UNCOMPLETED;
   payload: {
      name: string;
      firstName: string;
      email: string;
      age: string;
      content: string;
   };
}

interface ContactFormEmpty {
   type: FormActionType.CONTACT_FORM_EMPTY;
   payload: string;
}


//* SignUp interfaces
interface SignUpSuccess {
   type: FormActionType.SIGN_UP_SUCCESS;
   payload: {
      message: string;
      user: string;
   };
}
interface SignUpUncompleted {
   type: FormActionType.SIGN_UP_UNCOMPLETED;
   payload: {
      name: string;
      firstName: string;
      email: string;
      password: string;
   };
}
interface SignUpEmpty {
   type: FormActionType.SIGN_UP_EMPTY;
   payload: string;
}

//*SignIn interfaces
interface SignInSuccess {
   type: FormActionType.SIGN_IN_SUCCESS;
   payload: string
}

interface SignInFailed {
   type: FormActionType.SIGN_IN_FAILED;
   payload: {
      email: string;
      password: string;
   };
}

//*Google Auth
interface GoogleAuth {
   type:  FormActionType.GOOGLE_AUTH
   payload: {}
}

export type ContactAction = ContactFormSucces | ContactFormUncompleted | ContactFormEmpty;
export type SignUpAction = SignUpSuccess | SignUpUncompleted | SignUpEmpty;
export type SignInAction = SignInSuccess | SignInFailed
export type GoogleAuthAction = GoogleAuth
