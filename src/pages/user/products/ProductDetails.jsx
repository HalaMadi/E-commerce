import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Loader from '../../../components/loader/Loader'

const ProductDetails = () => {
  const {productId}=useParams()
  const {data,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/products/${productId}`)

  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <img src={data.product.mainImage.secure_url} alt="" />
    </div>
  )
}

export default ProductDetails