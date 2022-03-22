//*react icons
import { GrLogout } from 'react-icons/gr';

//*store
import * as Actions from '../../../store/actions/index';

//*Redux
import { useDispatch } from 'react-redux';

const Logout = () => {
   const dispatch = useDispatch();

   const logoutUser = () => {
      dispatch(Actions.logoutAction());
      dispatch(Actions.clearUserInfoLogout());
   };

   return (
      <section className='logout-button'>
         <button onClick={logoutUser}>
            <GrLogout />
         </button>
      </section>
   );
};

export default Logout;
