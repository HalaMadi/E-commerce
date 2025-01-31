import Loader from "../../../components/loader/Loader"
import useFetch from "../../../hooks/useFetch"

const Category = () => {
  const { data, isLoading, error } = useFetch('https://ecommerce-node4.onrender.com/categories/active')
console.log(data);

  if (isLoading) {
    return <Loader />
  }
  return (
    <div>
      {error ? <div className='alert alert-danger '>{error}</div> : ''}
      {data.categories.map(category => 
        <div key={category._id}>
          <img src={category.image.secure_url} alt="" />
        </div>
      )}
    </div>
  )
}

export default Category