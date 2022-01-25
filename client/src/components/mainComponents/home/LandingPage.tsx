import React from 'react';

import { Link } from 'react-router-dom';

//*Components
// import WhyKinnaccess from './subHomePages/WhyKinnaccess';
// import WhatIsKinnaccess from './subHomePages/WhatIsKinaccess';

const LandingPage = () => {
   return (
      <div className='main'>
         <section className='infos'>
            <h1>Kinaccess</h1>
            <section className='components-links'>
               <Link to='/why-us'>Why Kinaccess</Link>
               <Link to='/what-is-it'>What is Kinaccess</Link>
            </section>
         </section>
      </div>
   );
};

export default LandingPage;
