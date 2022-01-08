import React from 'react';

//** Import files */
import Home from '../components/navigations/navComponents/Home';
import About from '../components/navigations/navComponents/About';
import ContactForm from '../components/navigations/navComponents/ContactForm';
import UserAccount from '../components/navigations/navComponents/UserAccount';

//** Import routers */
import { Route, Navigate, Routes as Routing } from 'react-router';

const Routes = () => {
   return (
      <Routing>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<ContactForm />} />
         <Route path='/user-profile' element={<UserAccount />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routing>
   );
};

export default Routes;
