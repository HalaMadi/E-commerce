import { Link } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import useFetch from "../../../hooks/useFetch"

const Products = () => {
  const { data, isLoading} = useFetch('https://ecommerce-node4.onrender.com/products?limit=10');

  if (isLoading) {
    return <Loader />
  }
  return (
    <section className="products">
      <h2>All Products</h2>
      <div className="row">
        {data.products.map(product =>
          <div className="col-md-4" key={product._id}>
            <img src={product.mainImage.secure_url} alt="" />
            <p>{product.name}</p>
            <Link to={`/products/${product._id}`}>Details</Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products