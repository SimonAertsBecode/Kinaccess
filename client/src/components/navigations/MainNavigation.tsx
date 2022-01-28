import Logout from '../forms/log/Logout';

//*react-router-dom
import { Link, Outlet } from 'react-router-dom';

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
               <Link to='/'>Page d'acceuil</Link>
            </li>
            <li>
               <Link to='contact'>Contact</Link>
            </li>

            <li>
               <Link to='globalInfo'>La lombalgie</Link>
            </li>
            <li>
               <Link to='globalInfo/functionning'>fonctionnement </Link>
            </li>

            <Outlet />

            <li className='session-button'>{loggedIn ? <Logout /> : <Link to='/user-profile'>se connecter / s'enregistrer</Link>}</li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
