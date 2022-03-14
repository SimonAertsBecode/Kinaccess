import React from 'react';

//** Import components */
import Home from '../HomePage/Home';
import ContactForm from '../Contact/ContactForm';
import UserAccount from '../Profile/UserAccount';
import Error404 from '../ErrorPages/Error404';

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
