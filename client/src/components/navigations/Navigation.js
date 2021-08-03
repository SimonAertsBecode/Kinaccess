import { Link } from 'react-router-dom'

const Navigation = () => {
    return ( 
        <>
          <div className='navigation'>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/contact-me'>
                <li>Contact</li>
              </Link>
              <Link to='/about'>
                <li>A propos</li>
              </Link>
              <Link to='/user-profil'>
                <li>Votre compte</li>
              </Link>
            </ul>
          </div>
        </>
     );
}
 
export default Navigation;