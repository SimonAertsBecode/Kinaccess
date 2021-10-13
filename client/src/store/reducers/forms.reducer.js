import * as Actions from '../actions/index';

const initialState = {
   contactForm: {
      success: null,
      uncompleted: null,
      empty: null,
   },
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
      default:
         return state;
   }
};

export default formsReducer;
