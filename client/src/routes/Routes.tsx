import React from 'react';

//** Import components */
import Home from '../components/navigations/navComponents/Home';
import WhyKinnaccess from '../components/mainComponents/home/subHomePages/WhyKinnaccess';
import WhatIsKinaccess from '../components/mainComponents/home/subHomePages/WhatIsKinaccess';
import About from '../components/navigations/navComponents/About';
import ContactForm from '../components/navigations/navComponents/ContactForm';
import UserAccount from '../components/navigations/navComponents/UserAccount';

//** Import routers */
import { Route, Navigate, Routes as Routing } from 'react-router';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<Home />} />
         <Route path='why-us' element={<WhyKinnaccess />} />
         <Route path='what-is-it' element={<WhatIsKinaccess />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<ContactForm />} />
         <Route path='user-profile' element={<UserAccount />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routing>
   );
};

export default Routes;
