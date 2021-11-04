import React from 'react';

//** Import files */
import Home from '../components/navigations/navComponents/Home';
import About from '../components/navigations/navComponents/About';
import ContactForm from '../components/navigations/navComponents/ContactForm';
import UserAccount from '../components/navigations/navComponents/UserAccount';
import Error404 from '../components/navigations/navComponents/Error404';
import myHistory from '../utils/history';

//** Import routers */
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => {
   return (
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={ContactForm} />
         <Route exact path='/user-profile' component={UserAccount} />
         {/* <Route path='*' component={Error404} /> */}
         {/* <Redirect to='/' /> */}
      </Switch>
   );
};

export default Routes;
