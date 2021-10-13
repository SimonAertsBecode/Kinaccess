import * as Actions from '../actions/index';

const initialState = {
   contactForm: {
      success: '',
      failed: '',
   },
};

const formsReducer = (state = initialState, action) => {
   switch (action.type) {
      case Actions.CONTACT_FORM_SUCCESS:
         return {
            ...state,
            contactForm: {
               ...state.contactForm,
               success: action.payload,
            },
         };
      case Actions.CONTACT_FORM_FAILED:
         return {
            ...state,
            contactForm: {
               ...state.contactForm,
               failed: action.payload,
            },
         };
      default:
         return state;
   }
};

export default formsReducer;
