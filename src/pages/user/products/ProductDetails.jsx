import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Loader from '../../../components/loader/Loader'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

const ProductDetails = () => {
  const { productId } = useParams()
  const { data, isLoading } = useFetch(`https://ecommerce-node4.onrender.com/products/${productId}`)
  const navigate = useNavigate();
  const addToCart = async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post('https://ecommerce-node4.onrender.com/cart',
        {
          productId: productId
        },
        {
          headers: {
            Authorization: `Tariq__${token}`
          }
        }
      );
      if (response.status === 201) {
        toast.success('Product Added successfully 🎉', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
      navigate('/cart')
    } catch (err) {
      console.log("error", err);

    }
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='col-1'>
      <img src={data.product.mainImage.secure_url} alt="" />
      <Button disabled={isLoading} onClick={addToCart}>{isLoading ? "Wait..." : "Add to cart"}</Button>
    </div>
  )
}

export default ProductDetails