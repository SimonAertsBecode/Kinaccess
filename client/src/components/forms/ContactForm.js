import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'

const ContactForm = () => {
  
  const [initialValues, setValue] = useContext(UserContext)
  
  const [error, setError] = useState([
    {
      nameError: false,
      nameMessage: ''
    },
    {
      firstNameError: false,
      firstNameMessage: ''
    },
    {
      emailError: false,
      emailMessage: ''
    },
    {
      ageError: false,
      ageMessage: ''
    },
    {
      sexError: false,
      sexMessage: ''
    }
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    if(name === 'age') {
      let yearArray = value.split('-')
      let year = yearArray[0]
      let d = new Date()
      if(yearArray.length === 3 && 1920 < yearArray[0] < d.getFullYear() ) {
        let result = d.getFullYear() - year
  
        if(result > 0 && result < 100) {
          setValue(prevState => ({
          ...prevState,
          age: result
          }))
          setError(prevState => ({
            ...prevState,
            ageError : false
          }))
        } else {
          setError(prevState => ({
            ...prevState,
            ageError : true
          }))
        }
      }
    } else {
      setValue(prevState => ({
          ...prevState,
          [name]: value
      }))
    }
  }

  const checkValues = (e) => {
    e.preventDefault()
    if(initialValues.name && initialValues.firstName){
      let regexForEmailValidation = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i
      if(regexForEmailValidation.test(initialValues.email)) {
         setError(prevState => ({
            ...prevState,
            emailError : false,
          }))
      } else {
        setError(prevState => ({
            ...prevState,
            emailError : true,
            emailMessage: 'Vérifiez votre adresse e-mail est au bon format'
          }))
      }
    } else {
      setError(prevState => ({
            ...prevState,
            nameError : true,
            nameMessage: 'Vérifiez que vous avez bien mis votre Nom et Prénom',
            firstNameError: true,
            firstNameMessage: 'Vérifiez que vous avez bien mis votre Nom et Prénom'
          }))
    }
  }

    return ( 
      <>
        <form noValidate autoComplete='off' method='POST' action='/contact-me' className='contactForm'>
          <TextField 
            className='field'
            name='name'
            value={initialValues.name} 
            label='nom'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
            error={error.nameError}
          />
          <TextField 
            className='field'
            name='firstName'
            value={initialValues.firstName} 
            label='Prénom'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
            error={error.firstNameError}
          />
          <TextField 
            className='field'
            name='email'
            value={initialValues.email} 
            label='e-mail'
            variant='outlined'
            required
            fullWidth
            onChange={handleChange}
            error={error.emailError}
          />
           <TextField
            className='field'
            name='age'
            label="Date de naissance"
            type="date"
            className='field'
            onChange={handleChange}
            error={error.ageError}
          />
          <FormControl className='field'>
            <FormLabel> Sexe </FormLabel>
              <RadioGroup>
                <FormControlLabel name='sex' value="female" control={<Radio />} label="Female" onChange={handleChange}/>
                <FormControlLabel name='sex' value="male" control={<Radio />} label="Male" onChange={handleChange}/>
                <FormControlLabel name='sex' value="other" control={<Radio />} label="Other" onChange={handleChange}/>
              </RadioGroup>
            </FormControl>
          <TextField 
            className='field'
            name='content'
            value={initialValues.content} 
            label='Message'
            variant='outlined'
            multiline={true}
            rows={10}
            required
            fullWidth
            onChange={handleChange}
          />
          <button type='submit' onSubmit={checkValues}>envoyé</button>
        </form>
      </>
     );
}
 
export default ContactForm;