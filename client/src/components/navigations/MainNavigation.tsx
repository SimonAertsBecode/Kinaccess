import Logout from '../forms/log/Logout';

//*react-router-dom
import { Link } from 'react-router-dom';

//*Redux import
import { useSelector, RootStateOrAny } from 'react-redux';

const MainNavigation = () => {
   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);
   console.log(loggedIn);
   return (
      <nav className='navigation'>
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

            <li>
               <Link to='/user-profile'>Votre compte</Link>
            </li>
            {loggedIn && (
               <li>
                  <Logout />
               </li>
            )}
         </ul>
      </nav>
   );
};

export default MainNavigation;
