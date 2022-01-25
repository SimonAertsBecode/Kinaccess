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
                     <Link to='/whatKin'>Qu'est-ce Kinaccess?</Link>
                  </button>
                  <button>
                     <Link to='/goalKin'>Quel est le but de Kinaccess?</Link>
                  </button>
                  <button>
                     <Link to='/howKin'>Comment la plateforme fonctionne?</Link>
                  </button>
               </section>
            </Tilt>
         </section>
      </div>
   );
};

export default LandingPage;
