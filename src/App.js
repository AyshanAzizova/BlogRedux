import React from 'react'
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default App
