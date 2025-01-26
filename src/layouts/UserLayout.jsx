import { Outlet } from 'react-router-dom'
import CustomNavbar from '../components/user/navbar/CustomNavbar'

const UserLayout = () => {
  return (
    <div>
      <CustomNavbar/>
      <Outlet/>
      </div>
  )
}

export default UserLayout