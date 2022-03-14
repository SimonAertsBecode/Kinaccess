import React from 'react';

//** Import components */
import Home from '../components/navigations/navComponents/Home';
import ContactForm from '../components/navigations/navComponents/ContactForm';
import UserAccount from '../components/navigations/navComponents/UserAccount';
import Error404 from '../components/navigations/navComponents/Error404';

//** Import routers */
import { Route, Routes as Routing } from 'react-router';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<Home />} />
         <Route path='contact' element={<ContactForm />} />
         <Route path='profile' element={<UserAccount />} />
         <Route path='*' element={<Error404 />} />
      </Routing>
   );
};

export default Routes;
