import React from 'react'
import phone5 from "../images/phone5.jpg"
import phone3 from "../images/phone3.jpg"
import phone2 from "../images/phone2.jpg"

function Products() {
  return (
    <div>
   <div className='firstrow'>
   <div className='card'>
        <h2>iphone</h2>
        <img src={phone5} alt=""/>
        <p>Ghc10,000</p>
        <button>Buy Me</button>
        </div>

        <div className='card'>
        <h2>smartphones</h2>
        <img src={phone3} alt=""/>
        <p>Ghc1300</p>
        <button>Buy Me</button>
        </div>

        <div className='card'>
        <h2>smartphones</h2>
        <img src={phone2} alt=""/>
        <p>Ghc1300</p>
        <button>Buy Me</button>
        </div>

   </div>
   <div className='headphones'></div>

   <div className='pendrives'></div>

   <div className=''></div>
    
    </div>
  )
}

export default Products