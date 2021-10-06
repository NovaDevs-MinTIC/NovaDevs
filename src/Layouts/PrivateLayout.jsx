import React from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen bg-gray-50'>
      <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
        <Sidebar />
        <SidebarResponsive></SidebarResponsive>
        <main className='flex w-full  items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
