import React from 'react';

//**Import files */
import MainNavigation from './components/navigations/MainNavigation';
import Routes from './routes/Routes';

//** Import router */
import { Switch } from 'react-router-dom';
import { Router } from 'react-router';

import { myHistory } from './hooks/useHistory';

const App = () => {
   return (
      <Router history={myHistory}>
         <MainNavigation />
         <Switch>
            <Routes />
         </Switch>
      </Router>
   );
};

export default App;
