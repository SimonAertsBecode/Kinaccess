import * as Actions from '../actions/index';

const localStorageLoggedIn = localStorage.getItem('loggedIn');
const localStorageUser = JSON.parse(localStorage.getItem('profile'));

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
   googleAuth: null,
};

const formsReducer = (state = initialState, action) => {
   switch (action.type) {
      case Actions.CONTACT_FORM_SUCCESS:
         return {
            ...state,
            contactForm: {
               success: action.payload,
               uncompleted: null,
               empty: null,
            },
         };
      case Actions.CONTACT_FORM_UNCOMPLETED:
         return {
            ...state,
            contactForm: {
               success: null,
               uncompleted: action.payload,
               empty: null,
            },
         };
      case Actions.CONTACT_FORM_EMPTY:
         return {
            ...state,
            contactForm: {
               success: null,
               uncompleted: null,
               empty: action.payload,
            },
         };
      case Actions.SIGN_UP_SUCCESS:
         return {
            ...state,
            signUpForm: {
               success: action.payload,
               uncompleted: null,
               empty: null,
            },
         };
      case Actions.SIGN_UP_UNCOMPLETED:
         return {
            ...state,
            signUpForm: {
               success: null,
               uncompleted: action.payload,
               empty: null,
            },
         };
      case Actions.SIGN_UP_EMPTY:
         return {
            ...state,
            signUpForm: {
               success: null,
               uncompleted: null,
               empty: action.payload,
            },
         };
      case Actions.SIGN_IN_SUCCESS:
         localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
         localStorage.setItem('loggedIn', true);
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               success: {
                  ...state.success,
                  loggedIn: true,
                  user: action.payload,
               },
               failed: null,
            },
         };
      case Actions.SIGN_IN_FAILED:
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               failed: action.payload,
            },
         };
      case Actions.GOOGLE_AUTH:
         localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
         localStorage.setItem('loggedIn', true);
         return {
            ...state,
            signInForm: {
               ...state.signInForm,
               success: {
                  ...state.success,
                  loggedIn: true,
               },
            },
            googleAuth: action.payload,
         };
      default:
         return state;
   }
};

export default formsReducer;
