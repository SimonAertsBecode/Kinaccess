import { useState, MouseEvent, useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { AiFillGoogleCircle } from 'react-icons/ai';

//* Import files
import useFormsHook from '../../../utils/formsHook';
import * as Actions from '../../../store/actions/index';

//* Google
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const SignInForm = () => {
   const dispatch = useDispatch();

   const uncompleted = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.failed);

   const [signInValues, setSignInValues] = useState({
      email: '',
      password: '',
   });

   const [googleFailed, setGoogleFailed] = useState<boolean>(false);

   const submitForm = (e: MouseEvent) => {
      e.preventDefault();
      dispatch(Actions.signInFormAction(signInValues));
   };

   const googleSuccess = async (res: GoogleLoginResponseOffline | GoogleLoginResponse): Promise<void> => {
      if (('profileObj' && 'tokenId') in res) {
         const result = res?.profileObj;
         const token = res?.tokenId;

         try {
            dispatch(Actions.googleAuthAction({ result, token }));
         } catch (err) {
            console.log(err);
         }
      }
   };

   const googleFailure = () => {
      setGoogleFailed(true);
   };

   return (
      <section className='log-form'>
         <form>
            <TextField
               className='field'
               name='email'
               id='email'
               value={signInValues.email}
               label='email'
               variant='outlined'
               required
               fullWidth
               error={uncompleted?.email ? true : false}
               onChange={(e) => {
                  useFormsHook.handleChange(e, setSignInValues);
               }}
            />
            <strong>{uncompleted?.email}</strong>
            <TextField
               className='field'
               name='password'
               id='password'
               value={signInValues.password}
               label='Mot de passe'
               variant='outlined'
               type='password'
               required
               fullWidth
               error={uncompleted?.password ? true : false}
               onChange={(e) => {
                  useFormsHook.handleChange(e, setSignInValues);
               }}
            />
            <strong>{uncompleted?.password}</strong>
            <Button
               className='btn-submit'
               onClick={(e) => {
                  submitForm(e);
               }}
               type='submit'
               variant='contained'
               endIcon={<KeyboardArrowRightIcon />}
            >
               Connectez-vous
            </Button>
            <GoogleLogin
               clientId={'458697001268-dml15t87n2tk21c9n6ionesf92i64qoe.apps.googleusercontent.com'}
               render={(renderProps) => (
                  <Button className='google-button' onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<AiFillGoogleCircle />} variant='contained'>
                     Continuer avec google
                  </Button>
               )}
               onSuccess={googleSuccess}
               onFailure={googleFailure}
               cookiePolicy='single_host_origin'
            />
         </form>
         {googleFailed && <div>La connection avec google a échoué</div>}
      </section>
   );
};

export default SignInForm;
