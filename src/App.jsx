import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/user/register/Register'
import DashboardLayout from './layouts/DashboardLayout'
import LogIn from './pages/user/login/LogIn'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <LogIn />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />
    }
  ])
  return (
    <>
     <RouterProvider router={router}/> 
    </>
  )
}

export default App