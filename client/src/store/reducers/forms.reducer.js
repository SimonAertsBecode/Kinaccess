import * as Actions from '../actions/index';

const initialState = {
   // contactForm: 'to avoid bug',
};

const formReducer = (state = initialState, action) => {
   switch (action.type) {
      // case Actions.CONTACT_FORM:
      //    return {
      //       ...state,
      //       contactForm: true,
      //    };
      default:
         return state;
   }
};

export default formReducer;
