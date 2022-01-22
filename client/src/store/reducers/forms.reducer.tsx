import { ContactAction, SignUpAction, SignInAction, GoogleAuthAction, LogoutACtion } from './reducersInterfaces/formsInterfaces';

import { FormActionType } from '../actionTypes/formActionType';

const localStorageLoggedIn = localStorage.getItem('loggedIn');
const localStorageUser = localStorage.getItem('profile');

const initialState = {
   contactForm: {
      success: null,
      uncompleted: null,
      empty: null,
   },
   signUpForm: {
      success: null,
      uncompleted: null,
      empty: null,
   },
   signInForm: {
      success: {
         loggedIn: localStorageLoggedIn ? localStorageLoggedIn : false,
         user: localStorageUser ? localStorageUser : null,
      },
      failed: null,
   },
   googleAuth: localStorageUser ? localStorageUser : null,
};

const formsReducer = (state = initialState, action: ContactAction | SignUpAction | SignInAction | GoogleAuthAction | LogoutACtion) => {
   switch (action.type) {
      case FormActionType.CONTACT_FORM_SUCCESS:
         return {
            ...state,
            contactForm: {
               success: action.payload,
               uncompleted: null,
               empty: null,
            },
         };
      case FormActionType.CONTACT_FORM_UNCOMPLETED:
         return {
            ...state,
            contactForm: {
               success: null,
               uncompleted: action.payload,
               empty: null,
            },
         };
      case FormActionType.CONTACT_FORM_EMPTY:
         return {
            ...state,
            contactForm: {
               success: null,
               uncompleted: null,
               empty: action.payload,
            },
         };
      case FormActionType.SIGN_UP_SUCCESS:
         return {
            ...state,
            signUpForm: {
               success: action.payload,
               uncompleted: null,
               empty: null,
            },
         };
      case FormActionType.SIGN_UP_UNCOMPLETED:
         return {
            ...state,
            signUpForm: {
               success: null,
               uncompleted: action.payload,
               empty: null,
            },
         };
      case FormActionType.SIGN_UP_EMPTY:
         return {
            ...state,
            signUpForm: {
               success: null,
               uncompleted: null,
               empty: action.payload,
            },
         };
      case FormActionType.SIGN_IN_SUCCESS:
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               success: {
                  loggedIn: true,
                  user: action.payload,
               },
               failed: null,
            },
         };
      case FormActionType.SIGN_IN_FAILED:
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               failed: action.payload,
            },
         };
      case FormActionType.GOOGLE_AUTH:
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               success: {
                  ...state.signInForm.success,
                  loggedIn: true,
               },
            },
            googleAuth: action.payload,
         };
      case FormActionType.LOGOUT:
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               success: {
                  loggedIn: false,
                  user: null,
               },
            },
            googleAuth: null,
         };
      default:
         return state;
   }
};

export default formsReducer;
