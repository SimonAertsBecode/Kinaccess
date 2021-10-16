import React from 'react';
import ContactForm from './components/forms/ContactForm';
import MainNavigation from './components/navigations/MainNavigation';
import About from './components/navigations/navComponents/About';
import MainLayout from './components/MainLayout';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UserAccount from './components/navigations/navComponents/UserAccount';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <MainNavigation />
            <Switch>
               <Route path='/' exact component={MainLayout} />
               <Route path='/about' exact component={About} />
               <Route path='/contact-me' exact component={ContactForm} />
               <Route path='/user-profil' exact component={UserAccount} />
               <Redirect to='/' />
            </Switch>
         </BrowserRouter>
      </>
   );
};

export default App;
