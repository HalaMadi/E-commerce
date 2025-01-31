import Loader from "../../../components/loader/Loader"
import useFetch from "../../../hooks/useFetch"
import { Link } from "react-router-dom";

const Category = () => {
  const { data, isLoading, error } = useFetch('https://ecommerce-node4.onrender.com/categories/active')

  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      {error ? <div className='alert alert-danger '>{error}</div> : ''}
      <h2>Categories</h2>
      {data.categories.map(category =>
        <div key={category._id}>
          <img src={category.image.secure_url} alt="" />
          <Link to={`/categories/${category._id}`}>Show All</Link>
        </div>
      )}
    </div>
  )
}

export default Category