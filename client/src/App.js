import React from 'react';

//**Import files */
import MainNavigation from './components/navigations/MainNavigation';
import Routes from './components/navigations/routes/Routes';

//** Import router */
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import history from './hooks/useHistory';

const App = () => {
   return (
      <Router history={history}>
         <MainNavigation />
         <Switch>
            <Routes />
         </Switch>
      </Router>
   );
};

export default App;
