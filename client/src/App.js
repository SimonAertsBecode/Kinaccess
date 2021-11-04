import React from 'react';

//**Import files */
import MainNavigation from './components/navigations/MainNavigation';
import Routes from './routes/Routes';

//** Import router */
import { Router } from 'react-router-dom';

import myHistory from './utils/history';

const App = () => {
   return (
      <Router history={myHistory}>
         <MainNavigation />
         <Routes />
      </Router>
   );
};

export default App;
