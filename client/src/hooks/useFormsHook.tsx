import React from 'react';

class useFormsHook {
   static handleChange(event: React.ChangeEvent<{}>, setValueFunction: Function) {
      const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement;

      return setValueFunction((prevState: Object) => ({
         ...prevState,
         [name]: value,
      }));
   }

   static submitForm(){}
}

export default useFormsHook;
