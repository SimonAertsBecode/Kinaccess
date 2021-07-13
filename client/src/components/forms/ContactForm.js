import React, { useState } from "react"

const ContactForm = () => {
  // const [age, setAge] = useState('')
  // const ageArray = [...Array(101).keys()].slice(10)

  const [initialValues, setValue] = useState({
    name: '',
    firstName: '',
    email: '',
    age: '',
    content: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setValue(prevState => ({
        ...prevState,
        [name]: value
    }))
  }

  console.log(initialValues)
  

    return ( 
      <>
        <form method='POST' action='/contact-me' className='contactForm'>
          <section>
            <label for='name'>Nom:</label>
            <input
              value={initialValues.name} 
              name='name' 
              type='textareatextaerea' 
              id='name'
              onChange={handleChange}
              ></input>
          </section>
          <section>
            <label for='firstName'>Prénom: </label>
            <input 
              value={initialValues.firstName}
              name='firstName' 
              type='textaerea' 
              id='firstName'
              onChange={handleChange}
              ></input>
          </section>
          <section>
            <label for='email'>Adresse e-mail: </label>
            <input 
              value={initialValues.email}
              name='email' 
              type='textaerea' 
              id='email'
              onChange={handleChange}
              ></input>
          </section>
          <section>
            <label for='age'>Votre âge: </label>
            <input 
              value={initialValues.age}
              name='age' 
              type='textaerea' 
              id='age'
              onChange={handleChange}
              ></input>
          </section>
          <section>
            <label for='content'>Message: </label>
            <input 
              value={initialValues.content}
              name='content' 
              type='textaerea' 
              id='content'
              onChange={handleChange}
              ></input>
          </section>
          <button type='submit'>envoyé</button>
        </form>
      </>
     );
}
 
export default ContactForm;