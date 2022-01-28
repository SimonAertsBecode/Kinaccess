import React from 'react';

//** Import components */
//----------------------
import Home from '../components/navigations/navComponents/Home';
import GoalOfKinaccess from '../components/mainComponents/home/subHomePages/GoalOfKinnaccess';
import WhatIsKinaccess from '../components/mainComponents/home/subHomePages/WhatIsKinaccess';
import HowWorksKinaccess from '../components/mainComponents/home/subHomePages/HowWorksKinaccess';

//----------------------
import GlobalInfo from '../components/mainComponents/education/GlobalInfo';
import Functionning from '../components/mainComponents/education/Functionning';
import Prevention from '../components/mainComponents/education/Prevention';
import GatheringPages from '../components/mainComponents/education/GatheringPages';

//----------------------
import ContactForm from '../components/navigations/navComponents/ContactForm';

//----------------------
import UserAccount from '../components/navigations/navComponents/UserAccount';

//** Import routers */
import { Route, Navigate, Routes as Routing } from 'react-router';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<Home />} />
         <Route path='whatKin' element={<WhatIsKinaccess />} />
         <Route path='goalKin' element={<GoalOfKinaccess />} />
         <Route path='howKin' element={<HowWorksKinaccess />} />
         <Route path='globalinfo' element={<GatheringPages />}>
            <Route index element={<GlobalInfo />} />
            <Route path='functionning' element={<Functionning />} />
            <Route path='prevention' element={<Prevention />} />
         </Route>
         <Route path='contact' element={<ContactForm />} />
         <Route path='user-profile' element={<UserAccount />} />
         <Route path='*' element={<Navigate to='/' />} />
      </Routing>
   );
};

export default Routes;
