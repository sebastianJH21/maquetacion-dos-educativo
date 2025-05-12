
import './SearchClient.css'
import { alertMsg } from '../../helpers/functions'
import { useNavigate } from 'react-router-dom'

function SearchClient() {
  let navigate = useNavigate();
  function search(){

    let email = document.querySelector('#emailClient').value
    if (email) {
      const regex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
      if (!regex.test(email)) {
        alertMsg('Error', 'Incorrect email format', 'info')
      } else {
        navigate('/clients')
      }
    }else{
      alertMsg('Error', 'Please enter a client email', 'error')
      
    }
  }
  return (
    <main>
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
