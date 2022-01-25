import React from 'react';

//*react icons
import { GrLogout } from 'react-icons/gr';

//*store
import * as Actions from '../../../store/actions/index';

//*Redux
import { useDispatch } from 'react-redux';

const Logout = () => {
   const dispatch = useDispatch();

   const logoutUser = () => {
      localStorage.clear();
      dispatch(Actions.logoutAction());
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
