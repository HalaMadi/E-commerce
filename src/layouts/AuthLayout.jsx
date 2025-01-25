import React from 'react'
import Navbar from '../components/user/navbar/CustomNavbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout