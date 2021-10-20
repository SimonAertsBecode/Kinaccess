import React from 'react';

//** Import files */
import ContactForm from '../../forms/ContactForm';
import About from '../navComponents/About';
import MainLayout from '../navComponents/MainLayout';
import UserAccount from '../navComponents/UserAccount';

//** Import routers */
import { Redirect, Route } from 'react-router-dom';

const Routes = () => {
   return (
      <>
         <Route path='/' exact component={MainLayout} />
         <Route path='/about' exact component={About} />
         <Route path='/contact' exact component={ContactForm} />
         <Route path='/user-profile' exact component={UserAccount} />
         <Redirect to='/' />
      </>
   );
};

export default Routes;
