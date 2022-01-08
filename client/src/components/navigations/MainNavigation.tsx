import { Link } from 'react-router-dom';

const MainNavigation = () => {
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
         </ul>
      </nav>
   );
};

export default MainNavigation;
