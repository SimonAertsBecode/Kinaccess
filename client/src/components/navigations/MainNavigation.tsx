import Logout from '../forms/Log/Logout';

//*react-router-dom
import { NavLink } from 'react-router-dom';

//*Redux import
import { useSelector, RootStateOrAny } from 'react-redux';
import { useEffect, useState } from 'react';

const MainNavigation = () => {
   const loggedInRedux = useSelector((kinaccess: RootStateOrAny) => kinaccess.formsReducer.signInForm.success.loggedIn);
   const [loggedIn, setLoggedIn] = useState(false);

   useEffect(() => {
      const localStorageLoggedIn = localStorage.getItem('loggedIn');
      if (!localStorageLoggedIn) return setLoggedIn(false);
      setLoggedIn(true);
   }, [loggedInRedux]);

   return (
      <nav className='navigation'>
         <h1>
            <NavLink to='/'>Kinaccess</NavLink>
         </h1>
         <ul>
            <li>
               <NavLink to='contact'>Contact</NavLink>
            </li>

            {loggedIn ? (
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
                  <NavLink to='profile'>sign in / sign up</NavLink>
               </li>
            )}
         </ul>
      </nav>
   );
};

export default MainNavigation;
