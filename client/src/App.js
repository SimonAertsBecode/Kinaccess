import React from 'react';
import { Router } from 'react-router';

//**Import files */
import MainNavigation from './components/navigations/MainNavigation';
import Routes from './routes/Routes';

const App = () => {
   return (
      <>
         <MainNavigation />
         <Routes />
      </>
   );
};

export default App;
