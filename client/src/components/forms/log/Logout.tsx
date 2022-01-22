import React from 'react';

//*material UI
import LogoutIcon from '@mui/icons-material/Logout';

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
      <div>
         <button onClick={logoutUser}>
            <LogoutIcon />
         </button>
      </div>
   );
};

export default Logout;
