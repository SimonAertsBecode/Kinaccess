//** react router imports
import { Link } from 'react-router-dom';

//*dependencies
import Tilt from 'react-parallax-tilt';

const LandingPage = () => {
   return (
      <div className='main'>
         <section className='infos'>
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
               <h1>Login system and contact form</h1>
               <section className='components-links'>
                  <button>
                     <Link to='/profile'>Check sign in - sign up system</Link>
                  </button>
                  <button>
                     <Link to='/contact'>Send me a message</Link>
                  </button>
               </section>
            </Tilt>
         </section>
      </div>
   );
};

export default LandingPage;
