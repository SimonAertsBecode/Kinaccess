import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//* UI
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

//* import files
import { handleChange } from '../../hooks/useFormsHook';
import * as Actions from '../../store/actions';

const ContactForm = () => {
   const dispatch = useDispatch();

   const [contactObject, setcontactObject] = useState({
      name: '',
      firstName: '',
      email: '',
      age: '',
      sex: '',
      content: '',
   });

   const checkValues = (e, contactObject) => {
      e.preventDefault();
      dispatch(Actions.getContactInfos(contactObject));
   };

   return (
      <>
         <form
            noValidate
            autoComplete='off'
            className='contactForm'
            onSubmit={(e) => {
               checkValues(e, contactObject);
            }}
         >
            <TextField
               className='field'
               name='name'
               value={contactObject.name}
               label='Nom'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  handleChange(event, setcontactObject);
               }}
               // error={error.nameError}
            />
            <TextField
               className='field'
               name='firstName'
               value={contactObject.firstName}
               label='Prénom'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  handleChange(event, setcontactObject);
               }}
               // error={error.firstNameError}
            />
            {/* <strong>{error.nameError || error.firstNameError ? error[1].namesMessage : ''}</strong> */}
            <TextField
               className='field'
               name='email'
               value={contactObject.email}
               label='e-mail'
               variant='outlined'
               required
               fullWidth
               onChange={(event) => {
                  handleChange(event, setcontactObject);
               }}
               // error={error.emailError}
            />
            {/* <strong>{error.emailError ? error[2].emailMessage : ''}</strong> */}
            <TextField
               className='field'
               name='age'
               label='Date de naissance'
               type='date'
               required
               onChange={(event) => {
                  handleChange(event, setcontactObject);
               }}
               // error={error.ageError}
               InputLabelProps={{ shrink: true }}
            />
            {/* <strong>{error.ageError ? error[3].ageMessage : ''}</strong> */}
            <FormControl className='radio' required>
               <FormLabel> Sexe </FormLabel>
               <RadioGroup>
                  <FormControlLabel
                     name='sex'
                     value='female'
                     control={<Radio />}
                     label='Female'
                     onChange={(event) => {
                        handleChange(event, setcontactObject);
                     }}
                  />
                  <FormControlLabel
                     name='sex'
                     value='male'
                     control={<Radio />}
                     label='Male'
                     onChange={(event) => {
                        handleChange(event, setcontactObject);
                     }}
                  />
                  <FormControlLabel
                     name='sex'
                     value='other'
                     control={<Radio />}
                     label='Other'
                     onChange={(event) => {
                        handleChange(event, setcontactObject);
                     }}
                  />
               </RadioGroup>
            </FormControl>
            {/* <strong>{error.sexError ? error[4].sexMessage : ''}</strong> */}
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
                  handleChange(event, setcontactObject);
               }}
               // error={error.contentError}
            />
            {/* <strong>{error.contentError ? error[5].contentMessage : ''}</strong> */}
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
         <section>{}</section>
      </>
   );
};

export default ContactForm;
