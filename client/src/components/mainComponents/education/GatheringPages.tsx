import React from 'react';
import { Outlet } from 'react-router-dom';

const GatheringPages = () => {
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default GatheringPages;
