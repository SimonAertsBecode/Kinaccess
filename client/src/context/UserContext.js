import React, {createContext, useState} from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
  const [initialValues, setValue] = useState({
    name: '',
    firstName: '',
    email: '',
    age: '',
    sex: '',
    content: ''
  })

  return(
    <UserContext.Provider value={[initialValues, setValue]}>
      {props.children}
    </UserContext.Provider>
  )
}