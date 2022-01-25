import React from 'react';

//** react router imports
import { Link } from 'react-router-dom';

//*dependencies
import Tilt from 'react-parallax-tilt';

const LandingPage = () => {
   return (
      <div className='main'>
         <section className='infos'>
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
               <h1>Kinaccess</h1>
               <p>Prévention - Éducation - Réhabilitation pour les lombalgies communes</p>
               <section className='components-links'>
                  <button>
                     <Link to='/why-us'>Why Kinaccess</Link>
                  </button>
                  <button>
                     <Link to='/what-is-it'>What is Kinaccess</Link>
                  </button>
               </section>
            </Tilt>
         </section>
      </div>
   );
};

export default LandingPage;
