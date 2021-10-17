import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

//* Import files
import useFormsHook from '../../../hooks/useFormsHook';
import * as Actions from '../../../store/actions';

const SignInForm = () => {
   const dispatch = useDispatch();

   const [signInValues, setSignInValues] = useState({
      email: '',
      password: '',
   });

   const submitForm = (e) => {
      e.preventDefault();
      dispatch(Actions.signInForm(signInValues));
   };

   return (
      <section className='log-form'>
         <form>
            <TextField
               className='field'
               name='email'
               value={signInValues.email}
               label='email'
               variant='outlined'
               required
               fullWidth
               //error={}
               onChange={(e) => {
                  useFormsHook.handleChange(e, setSignInValues);
               }}
            />
            <strong>{}</strong>
            <TextField
               className='field'
               name='password'
               value={signInValues.password}
               label='Mot de passe'
               variant='outlined'
               type='password'
               required
               fullWidth
               //error={}
               onChange={(e) => {
                  useFormsHook.handleChange(e, setSignInValues);
               }}
            />
            <strong>{}</strong>
            <Button
               className='btn-submit'
               onClick={submitForm}
               type='submit'
               // color='rgba(0,61,217)'
               variant='contained'
               endIcon={<KeyboardArrowRightIcon />}
            >
               Connectez-vous
            </Button>
         </form>
      </section>
   );
};

export default SignInForm;
