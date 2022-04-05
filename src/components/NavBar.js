import React from 'react'
import {FaJediOrder } from "react-icons/fa"
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div className='header'>
    <FaJediOrder className='icon'/>
    <h2>Target Phones And Accessories</h2>
    <ul>
        <li> <Link to ="/">Home</Link> </li>
        <li> <Link to ="/about">About Us</Link> </li>
        <li> <Link to = "/products">Products</Link> </li>
        <li> <Link to = "/contact us">Contact Us</Link> </li>
    </ul>
  
  

    </div>
  )
}

export default NavBar
