import { Table } from "react-bootstrap"
import useFetch from "../../../hooks/useFetch"
import Loader from "../../../components/loader/Loader"

// eslint-disable-next-line react/prop-types
const Cart = ({authToken}) => {
    const {data,isLoading}=useFetch('https://ecommerce-node4.onrender.com/cart',
        {
         method:'GET',
         Headers:{
          auth:authToken
         }
        }
    )
    if(isLoading){
      return <Loader/>
    }
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Cart