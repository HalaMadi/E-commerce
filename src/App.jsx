
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/user/register/Register'
import DashboardLayout from './layouts/DashboardLayout'
import LogIn from './pages/user/login/LogIn'
import { ToastContainer } from 'react-toastify'
import UserLayout from './layouts/UserLayout'
import Category from './pages/user/category/Category'
import Products from './pages/user/products/Products'
import Home from './pages/user/home/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <LogIn />
        }
      ]
    },
    {
      path: '/',
      element: <UserLayout />,
      children: [
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/category',
          element: <Category />
        },
        {
          path: '/products',
          element: <Products />
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
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App