import { Link } from 'react-router-dom'

const Navigation = () => {
    return ( 
        <>
          <ul>
            <Link to='/contact-me'>
              <li>Contact</li>
            </Link>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='about'>
              <li>A propos</li>
            </Link>
          </ul>
        </>
     );
}
 
export default Navigation;