import React from "react"
import ContactForm from './components/forms/ContactForm'
import Navigation from './components/main/Navigation'
import About from './components/navigations/About'
import MainLayout from './components/MainLayout'
import { UserProvider } from './context/UserContext'
import { BrowserRouter, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
            <Navigation />

            <Route path='/' exact component={MainLayout} />
            <Route path='/about' exact component={About} />
            <Route path='/Contact-me' exact component={ContactForm} />
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
