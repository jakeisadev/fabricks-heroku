import React from 'react'
import { Link } from 'react-router-dom' 
import './../css/styles.css'

//Make nav sticky

const Navbar = () => {
  return (
    <>
    <nav>
    <img src="./Fabricks-1.jpg" alt="Fabricks logo"/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Checkout</Link></li>
            <li><Link to="something">Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar