import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

//* Import files
import useFormsHook from '../../../hooks/useFormsHook';
import * as Actions from '../../../store/actions';

const SignUpForm = () => {
   const dispatch = useDispatch();

   const [signUpValues, setsignUpValues] = useState({
      name: '',
      firstName: '',
      email: '',
      password: '',
      password2: '',
   });

   const submitForm = () => {
      dispatch(Actions.signUpForm(signUpValues));
   };

   return (
      <div className='sigIn-Form'>
         <form>
            <TextField
               className='field'
               name='name'
               value={signUpValues.name}
               label='Nom'
               variant='outlined'
               required
               fullWidth
               onChange={(e) => {
                  useFormsHook.handleChange(e, setsignUpValues);
               }}
            />
            <strong></strong>
            <TextField
               className='field'
               name='firstName'
               value={signUpValues.firstName}
               label='Prénom'
               variant='outlined'
               required
               fullWidth
               onChange={(e) => {
                  useFormsHook.handleChange(e, setsignUpValues);
               }}
            />
            <strong></strong>
            <TextField
               className='field'
               name='email'
               value={signUpValues.email}
               label='email'
               variant='outlined'
               required
               fullWidth
               onChange={(e) => {
                  useFormsHook.handleChange(e, setsignUpValues);
               }}
            />
            <strong></strong>
            <TextField
               className='field'
               name='password'
               value={signUpValues.password}
               label='Mot de passe'
               variant='outlined'
               type='password'
               required
               fullWidth
               onChange={(e) => {
                  useFormsHook.handleChange(e, setsignUpValues);
               }}
            />
            <strong></strong>
            <TextField
               className='field'
               name='password2'
               value={signUpValues.password2}
               label='Mot de passe'
               variant='outlined'
               type='password'
               required
               fullWidth
               onChange={(e) => {
                  useFormsHook.handleChange(e, setsignUpValues);
               }}
            />
            {/* <strong>{passwordError ? 'Vos deux mots de passe ne correspondent pas' : ''}</strong> */}
            <Button
               className='btn-submit'
               onClick={submitForm}
               type='submit'
               // color='rgba(0,61,217)'
               variant='contained'
               endIcon={<KeyboardArrowRightIcon />}
            >
               Enregistrez-vous
            </Button>
         </form>
      </div>
   );
};

export default SignUpForm;
