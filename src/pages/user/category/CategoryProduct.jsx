import { Link, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import Loader from '../../../components/loader/Loader';

const CategoryProduct = () => {
  const {categoryId}=useParams();
  const {data,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/products/category/${categoryId}`);

  if(isLoading){
    return <Loader/>
  }
  return (
    <div className='row'>
      {data.products.map(product=>
        <div className='col-md-4' key={product._id}>
          <img src={product.mainImage.secure_url} alt="" />
          <p>{product.name}</p>
          <Link to={`/products/${product._id}`}>Details</Link>

        </div>
      )}
    </div>
  )
}

export default CategoryProduct