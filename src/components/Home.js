import React from 'react'
import phones from "../pics/phone4.jpg"
import head from "../pics/head4.jpg"
import drive from "../pics/drive4.jpg"
import cover from "../pics/cover4.jpg"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>
    <div className='card'>
        <h2>smartphones</h2>
        <img src={phones} alt=""/>
        <p>We sell quality smart phnes at affordable prices</p>
        <button> <Link to ="/products">View Phones</Link> </button>
        </div>

        <div className='card'>
        <h2>headphons</h2>
        <img src={head} alt=""/>
        <p>We sell quality smart phnes at affordable prices</p>
        <button> <Link to ="/products">View head</Link> </button>
    </div>
    </div>

    <div className='second-row'>

    <div className='card'>
        <h2>pen drives</h2>
        <img src={drive} alt=""/>
        <p>We sell quality smart phnes at affordable prices</p>
        <button> <Link to ="/products">View drive</Link> </button>
    </div>

    <div className='card'>
        <h2>phone cover</h2>
        <img src={cover} alt=""/>
        <p>We sell quality smart phnes at affordable prices</p>
        <button> <Link to ="/products">View cover</Link> </button>
    </div>

    </div>

    </div>
  )
}

export default Home