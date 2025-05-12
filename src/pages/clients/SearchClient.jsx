import { useState } from 'react'
import './SearchClient.css'
import { alertMsg } from '../../helpers/functions'
import { useNavigate } from 'react-router-dom'
import { clients } from '../../services/dataBase'

function SearchClient() {
  let navigate = useNavigate();
  function search(){

    console.log(clients)
    let email = document.querySelector('#emailClient').value
    if (email) {
      const regex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
      regex.test(email);
      if (regex.test(email)) {
        alertMsg('Error', 'Incorrect email format', 'info')
        navigate(`/client?${email}`)
      }
    }else{
      alertMsg('Error', 'Please enter a client email', 'error')
      
    }
  }
  return (
    <>
      <h1>Search Cliente</h1>
      <section>
        <input type="email" name='emailClient' id='emailClient' placeholder="Email" />
        <button onClick={search}>
          Search
        </button>
      </section>
    </>
  )
}

export default SearchClient
