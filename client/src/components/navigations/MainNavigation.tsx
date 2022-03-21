import Logout from '../forms/Log/Logout';

//*react-router-dom
import { NavLink } from 'react-router-dom';

//*Redux import
import { useSelector, RootStateOrAny } from 'react-redux';

const MainNavigation = () => {
   const userId = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.userId);

   return (
      <nav className='navigation'>
         <h1>
            <NavLink to='/'>Kinaccess</NavLink>
         </h1>
         <ul>
            <li>
               <NavLink to='contact'>Contact</NavLink>
            </li>

            {userId ? (
               <>
                  <li>
                     <NavLink to='profile'>Profile</NavLink>
                  </li>
                  <li>
                     <Logout />
                  </li>
               </>
            ) : (
               <li>
                  <NavLink to='profile'>Login / Register</NavLink>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default MainNavigation;
