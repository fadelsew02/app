import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import '../style.css';
import '../helper.css';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
        <Sidenav/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminLayout