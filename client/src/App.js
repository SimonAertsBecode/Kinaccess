import React from "react"
import ContactForm from './components/forms/ContactForm'
import Navigation from './components/navigations/Navigation'
import About from './components/navigations/main/About'
import MainLayout from './components/MainLayout'
import { UserProvider } from './context/UserContext'
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import UserAccount from "./components/navigations/main/UserAccount"


const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
            <Navigation />
            <Switch>
              <Route path='/' exact component={MainLayout} />
              <Route path='/about' exact component={About} />
              <Route path='/contact-me' exact component={ContactForm} />
              <Route path='/user-profil' exact component={UserAccount} />
              <Redirect to='/' />
            </Switch>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
