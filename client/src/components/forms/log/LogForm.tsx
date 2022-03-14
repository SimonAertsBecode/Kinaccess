import { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const LogForm = () => {
   const success = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signUpForm.success?.message);

   const [logModal, setLogModal] = useState(true);

   const toggleLogForms = (value: boolean) => {
      setLogModal(value);
   };

   return (
      <>
         <div className='forms'>
            {success ? (
               <>
                  <div className='title-forms'>
                     <h3
                        onClick={() => {
                           toggleLogForms(false);
                        }}
                     >
                        Se connecter
                     </h3>
                  </div>
                  <section className='logForms'>
                     <SignInForm />
                     <p>{success}</p>
                  </section>
               </>
            ) : (
               <>
                  <div className='title-forms'>
                     <h3
                        onClick={() => {
                           toggleLogForms(true);
                        }}
                     >
                        S'inscrire
                     </h3>
                     <h3
                        onClick={() => {
                           toggleLogForms(false);
                        }}
                     >
                        Se connecter
                     </h3>
                  </div>
                  <div className='logForms'>{logModal ? <SignUpForm /> : <SignInForm />}</div>
               </>
            )}
         </div>
      </>
   );
};

export default LogForm;
