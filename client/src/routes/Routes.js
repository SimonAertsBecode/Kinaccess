import React from 'react';

//** Import files */
import ContactForm from '../components/forms/ContactForm';
import About from '../components/navigations/navComponents/About';
import Home from '../components/navigations/navComponents/Home';
import UserAccount from '../components/navigations/navComponents/UserAccount';

//** Import routers */
import { Redirect, Route } from 'react-router-dom';

const Routes = () => {
   return (
      <>
         <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
         <Route path='/contact' exact component={ContactForm} />
         <Route path='/user-profile' exact component={UserAccount} />
         <Redirect to='/' />
      </>
   );
};

export default Routes;
