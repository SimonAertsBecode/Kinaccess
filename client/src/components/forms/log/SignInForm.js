import React, { useContext, useState } from 'react';
import axios from 'axios'
import { UserContext } from '../../../context/UserContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import e from 'express';

const SignInForm = () => {

  const [signInFormValues, setSignInFormValues] = useContext(UserContext)

  const [passwordError, setPasswordError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignInFormValues(prevState => ({
          ...prevState,
          [name]: value
      }))
    }
  
  // const submitForm = () =>{
  //   e.preventDefault()
  //   if(signInFormValues.password !== signInFormValues.password2){
  //     setPasswordError(true)
  //   } else {
  //     setPasswordError(false)
  //     axios.post('/register', signInFormValues)
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err =>{
  //         console.log(err)
  //       })
  //   }
  // }  
  

  return (
    <div className='sigIn-Form'>
      <form>
        <TextField 
            className='field'
            name='name'
            value={signInFormValues.name}
            label='Nom'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
          />
          <strong></strong>
          <TextField 
            className='field'
            name='firstName'
            value={signInFormValues.firstName}
            label='Prénom'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
          />
          <strong></strong>
          <TextField 
            className='field'
            name='email'
            value={signInFormValues.email}
            label='email'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
          />
          <strong></strong>
          <TextField 
            className='field'
            name='password'
            value={signInFormValues.password}
            label='Mot de passe'
            variant='outlined'
            type='password'
            required
            fullWidth
            onChange={handleChange}
          />
          <strong></strong>
          <TextField 
            className='field'
            value={signInFormValues.password2}
            label='Mot de passe'
            variant='outlined'
            type='password'
            required
            fullWidth
            onChange={handleChange}
          />
          <strong>{passwordError ? 'Vos deux mots de passe ne correspondent pas' : ''}</strong>
          <Button 
            className='btn-submit'
            // onClick={submitForm}
            type='submit'
            color='rgba(0,61,217)'
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}
          >
            Enregistrez-vous
          </Button>
      </form>
    </div>
  );
};

export default SignInForm;