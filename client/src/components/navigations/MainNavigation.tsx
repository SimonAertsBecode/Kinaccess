import Logout from '../forms/log/Logout';

//*react-router-dom
import { NavLink, Outlet } from 'react-router-dom';

//*Redux import
import { useSelector, RootStateOrAny } from 'react-redux';

const MainNavigation = () => {
   const loggedIn = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);

   return (
      <nav className='navigation'>
         <h1>
            <NavLink to='/'>Kinaccess</NavLink>
         </h1>
         <ul>
            <li>
               <NavLink to='contact'>Contact</NavLink>
            </li>

            <Outlet />

            <li>{loggedIn ? <Logout /> : <NavLink to='/user-profile'>sign in / sign up</NavLink>}</li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
