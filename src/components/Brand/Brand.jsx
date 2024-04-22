import React from 'react'
import { Link } from 'react-router-dom'
import './Brand.css'
import brand1 from '../../images/brand1.webp'
import brand2 from '../../images/brand2.webp'
import brand3 from '../../images/brand3.webp'
import brand4 from '../../images/brand4.webp'
import brand5 from '../../images/brand5.webp'


const Brand = () => {
  return (
  <div className='container'>
  <div className='brand'>
  <h3 style={{color:"gray",fontSize:"22px"}}>Bizdən danışırlar</h3>
  <ul>
  <li><Link><img src={brand1} alt='brand1'/></Link></li>
  <li><Link><img src={brand2} alt='brand2'/></Link></li>
  <li><Link><img src={brand3} alt='brand3'/></Link></li>
  <li><Link><img src={brand4} alt='brand4'/></Link></li>
  <li><Link><img src={brand5} alt='brand5'/></Link></li>
  </ul>
</div>
  </div>
  )
}

export default Brand
