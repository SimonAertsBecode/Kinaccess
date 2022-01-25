import Logout from '../forms/log/Logout';

//*react-router-dom
import { Link } from 'react-router-dom';

//*Redux import
import { useSelector, RootStateOrAny } from 'react-redux';

const MainNavigation = () => {
   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);
   return (
      <nav className='navigation'>
         <h1>
            <Link to='/'>Kinaccess</Link>
         </h1>
         <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/contact'>Contact</Link>
            </li>

            <li>
               <Link to='/about'>A propos</Link>
            </li>

            <li className='session-button'>{loggedIn ? <Logout /> : <Link to='/user-profile'>se connecter / s'enregistrer</Link>}</li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
