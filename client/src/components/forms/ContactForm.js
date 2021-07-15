import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import * as EmailValidator from 'email-validator'

const ContactForm = () => {
  
  const [initialValues, setValue] = useContext(UserContext)

  const [responsePostMessage, setResponsePostMessage] = useState('')
  
  const [error, setError] = useState([
    {
      nameError: false
    },
    {
      firstNameError: false,
      namesMessage: 'Vérifiez que vous avez bien mis votre Nom et Prénom'
    },
    {
      emailError: false,
      emailMessage: 'Vérifiez votre adresse e-mail est correct'
    },
    {
      ageError: false,
      ageMessage: 'Veuillez verifier votre date de naissance'
    },
    {
      sexError: false,
      sexMessage: 'veuillez sélectionner un genre'
    },
    {
      contentError: false,
      contentMessage: 'Veuillez écrire votre message'
    }
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    if(name === 'age') {
      let yearArray = value.split('-')
      let year = yearArray[0]
      let d = new Date()
      if(yearArray.length === 3 && 1920 < yearArray[0] < d.getFullYear()) {
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
      } else {
        setError(prevState => ({
            ...prevState,
            ageError : true
          }))
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
       setError(prevState => ({
         ...prevState,
         nameError : false,
         firstNameError: false
       }))
      if(EmailValidator.validate(initialValues.email)) {
         setError(prevState => ({
            ...prevState,
            emailError : false
          }))
          if(error.ageError === false) {
            if(initialValues.sex) {
               setError(prevState => ({
                 ...prevState,
                 sexError : false
              }))
              if(initialValues.content){
                setError(prevState => ({
                   ...prevState,
                   emailError : false
                  }))
                axios.post('/contact-me', initialValues)
                  .then(response => {
                    setResponsePostMessage(response.data.message)
                  })
                  .catch(error => {
                    setResponsePostMessage(error.data.message)
                  }) 
              } else {
                setError(prevState => ({
                  ...prevState,
                  contentError : true
                }))
              }
            } else {
              setError(prevState => ({
                ...prevState,
                sexError : true
              }))
            }
          } else {
             setError(prevState => ({
              ...prevState,
              ageError : true
            }))
          }
      } else {
        setError(prevState => ({
            ...prevState,
            emailError : true
          }))
      }
    } else {
      setError(prevState => ({
            ...prevState,
            nameError : true,
            firstNameError: true
          }))
    }
  }
  console.log(initialValues.age)

//   const checkValues = (e) => {
//   e.preventDefault()
//   switch (initialValues){
//     case initialValues.name === undefined : 
//       setError(prevState => ({
//          ...prevState,
//          nameError : true
//        }))
//        break;
//     case initialValues.firstName === undefined :
//       setError(prevState => ({
//          ...prevState,
//          firstNameError: true
//        }))
//        break;
//     case initialValues.email :
//       let regexEmailValidation = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i
//       if(!initialValues.email || !regexEmailValidation.test(initialValues.email)){
//         setError(prevState => ({
//          ...prevState,
//          emailError: true
//        }))
//       }
//       break;
//     case initialValues.age :
//       if(!initialValues.age || 0 > initialValues.age > 100){
//         setError(prevState => ({
//          ...prevState,
//          ageError: true
//        }))
//       }
//       break;
//     case initialValues.sex === undefined :
//       setError(prevState => ({
//          ...prevState,
//          sexError: true
//        }))
//     case initialValues.content === undefined :
//       setError(prevState => ({
//          ...prevState,
//          contentError: true
//        }))
//        break;
//     default : 
//        setError({
//          nameError: false,
//          firstNameError: false,
//          emailError: false,
//          ageError: false,
//          sexError: false,
//          contentError: false
//        })
//        axios.post('/contact-me', initialValues)
//          .then(response => {
//            setResponsePostMessage(response.data.message)
//          })
//          .catch(error => {
//            setResponsePostMessage(error.data.message)
//          })
//   }
// }

    return ( 
      <>
        <form noValidate autoComplete='off' className='contactForm' onSubmit={checkValues}>
          <TextField 
            className='field'
            name='name'
            value={initialValues.name} 
            label='Nom'
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
          <strong>{error.nameError || error.firstNameError ? error[1].namesMessage : ''}</strong>
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
          <strong>{error.emailError ? error[2].emailMessage : ''}</strong>
          <TextField
            className='field'
            name='age'
            label="Date de naissance"
            type="date"
            required
            onChange={handleChange}
            error={error.ageError}
            InputLabelProps={{ shrink: true }}
          />
          <strong>{error.ageError ? error[3].ageMessage : ''}</strong>
          <FormControl className='radio' required>
            <FormLabel> Sexe </FormLabel>
              <RadioGroup>
                <FormControlLabel name='sex' value="female" control={<Radio />} label="Female" onChange={handleChange}/>
                <FormControlLabel name='sex' value="male" control={<Radio />} label="Male" onChange={handleChange}/>
                <FormControlLabel name='sex' value="other" control={<Radio />} label="Other" onChange={handleChange}/>
              </RadioGroup>
            </FormControl>
          <strong>{error.sexError ? error[4].sexMessage : ''}</strong>  
          <TextField 
            className='field'
            name='content'
            value={initialValues.content} 
            label='Message'
            variant='outlined'
            multiline={true}
            rows={7}
            required
            fullWidth
            onChange={handleChange}
            error={error.contentError}
          />
          <strong>{error.contentError ? error[5].contentMessage : ''}</strong>
          <Button 
            className='btn-submit'
            type='submit'
            color='rgba(0,61,217)'
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
        <section>
          {responsePostMessage}
        </section>
      </>
     );
}
 
export default ContactForm;