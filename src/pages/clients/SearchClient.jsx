
import './SearchClient.css'
import { useNavigate } from 'react-router-dom'

function SearchClient() {
  let navigate = useNavigate();
  function search(){
    navigate('/clients')
  }
  return (
    <main className='searchClient'>
      <h1>Search Cliente</h1>
      <section>
        <input type="email" name='emailClient' id='emailClient' placeholder="Email" />
        <button onClick={search}>Search</button>
        <a href="/search-products">Search Product</a>
      </section>
    </main>
  )
}

export default SearchClient
