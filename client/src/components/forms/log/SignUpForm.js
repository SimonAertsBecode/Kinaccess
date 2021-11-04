import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

//* Import files
import useFormsHook from '../../../utils/formsHook';
import * as Actions from '../../../store/actions';

//* Import components
import SignInForm from './SignInForm';

const SignUpForm = () => {
   const dispatch = useDispatch();

   const success = useSelector((kinaccess) => kinaccess.formsReducer.signUpForm.success?.message);
   const uncompleted = useSelector((kinaccess) => kinaccess.formsReducer.signUpForm.uncompleted);
   const empty = useSelector((kinaccess) => kinaccess.formsReducer.signUpForm.empty);

   const [signUpValues, setsignUpValues] = useState({
      name: '',
      firstName: '',
      email: '',
      password: '',
      password2: '',
   });

   const [passwordsMatch, setPasswordsMatch] = useState(true);

   useEffect(() => {
      setPasswordsMatch(true);
      if (signUpValues.password !== signUpValues.password2) return setPasswordsMatch(false);
   }, [signUpValues.password, signUpValues.password2]);

   const submitForm = (e) => {
      e.preventDefault();
      if (passwordsMatch) dispatch(Actions.signUpFormAction(signUpValues));
   };

  

   return (
      <section className='log-form'>
         {success ? (
            <>
               <SignInForm />
               <section className='formResult success'>{success}. Vous pouvez vous connecter</section>
            </>
         ) : (
            <>
               <form>
                  <TextField
                     className='field'
                     name='name'
                     value={signUpValues.name}
                     label='Nom'
                     variant='outlined'
                     required
                     fullWidth
                     error={uncompleted?.name ? true : false}
                     onChange={(e) => {
                        useFormsHook.handleChange(e, setsignUpValues);
                     }}
                  />
                  <strong>{uncompleted?.name && uncompleted.name}</strong>
                  <TextField
                     className='field'
                     name='firstName'
                     value={signUpValues.firstName}
                     label='Prénom'
                     variant='outlined'
                     required
                     fullWidth
                     error={uncompleted?.firstName ? true : false}
                     onChange={(e) => {
                        useFormsHook.handleChange(e, setsignUpValues);
                     }}
                  />
                  <strong>{uncompleted?.firstName && uncompleted.firstName}</strong>
                  <TextField
                     className='field'
                     name='email'
                     value={signUpValues.email}
                     label='email'
                     variant='outlined'
                     required
                     fullWidth
                     error={uncompleted?.email ? true : false}
                     onChange={(e) => {
                        useFormsHook.handleChange(e, setsignUpValues);
                     }}
                  />
                  <strong>{uncompleted?.email && uncompleted.email}</strong>
                  <TextField
                     className='field'
                     name='password'
                     value={signUpValues.password}
                     label='Mot de passe'
                     variant='outlined'
                     type='password'
                     required
                     fullWidth
                     error={uncompleted?.password ? true : false}
                     onChange={(e) => {
                        useFormsHook.handleChange(e, setsignUpValues);
                     }}
                  />
                  <strong>{uncompleted?.password && uncompleted.password}</strong>
                  <TextField
                     className='field'
                     name='password2'
                     value={signUpValues.password2}
                     label='Confirmez votre mot de passe'
                     variant='outlined'
                     type='password'
                     required
                     fullWidth
                     error={!passwordsMatch ? true : false}
                     onChange={(e) => {
                        useFormsHook.handleChange(e, setsignUpValues);
                     }}
                  />
                  <strong>{!passwordsMatch && 'Vos mots de passe ne correspondent pas'}</strong>
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
               {empty && <section className='formResult failed'>{empty}</section>}
            </>
         )}
      </section>
   );
};

export default SignUpForm;
