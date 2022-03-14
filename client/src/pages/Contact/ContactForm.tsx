import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

//* import files
import useFormsHook from '../../hooks/useFormsHook';
import * as Actions from '../../store/actions';

const ContactForm = () => {
   const dispatch = useDispatch();

   const success = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.contactForm.success);
   const uncompleted = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.contactForm.uncompleted);
   const empty = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.contactForm.empty);

   const [contactObject, setcontactObject] = useState({
      name: '',
      firstName: '',
      email: '',
      age: '',
      sex: '',
      content: '',
   });

   const [ageConfirmed, setAgeConfirmed] = useState(true);

   useEffect(() => {
      const date = new Date();
      const year = date.getFullYear();
      const age = contactObject.age;
      const ageSplit = age.split('-');
      if (ageSplit.length === 3) {
         if (year - parseInt(ageSplit[0]) > 100 || year - parseInt(ageSplit[0]) < 10) return setAgeConfirmed(false);
         return setAgeConfirmed(true);
      }
   }, [contactObject.age]);

   const submitForm = (e: React.FormEvent): void => {
      e.preventDefault();
      dispatch(Actions.getContactInfosAction(contactObject, ageConfirmed));
   };

   return (
      <>
         <form noValidate autoComplete='off' className='contactForm' onSubmit={submitForm}>
            <TextField
               className='field'
               name='name'
               value={contactObject.name}
               label='Nom'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  useFormsHook.handleChange(event, setcontactObject);
               }}
               error={uncompleted?.name ? true : false}
            />
            <strong>{uncompleted?.name && uncompleted.name}</strong>
            <TextField
               className='field'
               name='firstName'
               value={contactObject.firstName}
               label='Prénom'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  useFormsHook.handleChange(event, setcontactObject);
               }}
               error={uncompleted?.firstName ? true : false}
            />
            <strong>{uncompleted?.firstName && uncompleted.firstName}</strong>
            <TextField
               className='field'
               name='email'
               value={contactObject.email}
               label='e-mail'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  useFormsHook.handleChange(event, setcontactObject);
               }}
               error={uncompleted?.email ? true : false}
            />
            <strong>{uncompleted?.email && uncompleted.email}</strong>
            <TextField
               className='field'
               name='age'
               label='Date de naissance'
               type='date'
               onChange={(event) => {
                  useFormsHook.handleChange(event, setcontactObject);
               }}
               error={uncompleted?.age ? true : false}
               InputLabelProps={{ shrink: true }}
            />
            <strong>{uncompleted?.age && uncompleted.age}</strong>
            <FormControl className='radio'>
               <FormLabel> Sexe </FormLabel>
               <RadioGroup>
                  <FormControlLabel
                     name='sex'
                     value='female'
                     control={<Radio />}
                     label='Female'
                     onChange={(event) => {
                        useFormsHook.handleChange(event, setcontactObject);
                     }}
                  />
                  <FormControlLabel
                     name='sex'
                     value='male'
                     control={<Radio />}
                     label='Male'
                     onChange={(event) => {
                        useFormsHook.handleChange(event, setcontactObject);
                     }}
                  />
                  <FormControlLabel
                     name='sex'
                     value='other'
                     control={<Radio />}
                     label='Other'
                     onChange={(event) => {
                        useFormsHook.handleChange(event, setcontactObject);
                     }}
                  />
               </RadioGroup>
            </FormControl>
            <TextField
               className='field'
               name='content'
               value={contactObject.content}
               label='Message'
               variant='outlined'
               multiline={true}
               rows={7}
               required
               fullWidth
               onChange={(event) => {
                  useFormsHook.handleChange(event, setcontactObject);
               }}
               error={uncompleted?.content ? true : false}
            />
            <strong>{uncompleted?.content && uncompleted.content}</strong>
            <Button
               className='btn-submit'
               type='submit'
               //color='rgba(0,61,217)'
               variant='contained'
               endIcon={<KeyboardArrowRightIcon />}
            >
               Envoyer
            </Button>
         </form>
         <section className='formResult contact'>{success || empty}</section>
      </>
   );
};

export default ContactForm;
