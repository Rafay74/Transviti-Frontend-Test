// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import React from 'react'
import Navbar from '../components/navbar/navbar';
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-primary">
      
      <Navbar />

     
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
