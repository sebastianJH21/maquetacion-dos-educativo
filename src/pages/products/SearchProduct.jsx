
import './SearchProduct.css'
import { useNavigate } from 'react-router-dom'

function SearchProduct() {
  let navigate = useNavigate();
  function search(){
    navigate('/products')
  }
  return (
    <main className='searchProduct'>
      <h1>Search Product</h1>
      <section>
        <input type="number" name='idProduct' id='idProduct' placeholder="Id" />
        <button onClick={search}>Search</button>
        <a href="/">Search Client</a>
      </section>
    </main>
  )
}

export default SearchProduct
