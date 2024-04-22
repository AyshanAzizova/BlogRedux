import React from 'react'
import './PurpleMap.css'
import { GoArrowRight } from 'react-icons/go'

const PurpleMap = () => {
  return (
    <div className='purpleMap'>
        <div className='content'>
        <h1>Yaradıcı Şəxslər üçün unikal dəstək platforma.</h1>
        <h4>Yarat 🎉 Paylaş 🚀 Qazan ☕</h4>
        <button style={{display:"flex",alignItems:"center",gap:"6px"}}>Qeydiyyat <GoArrowRight style={{fontSize:"16px"}}/></button>
        </div>
      </div>
  )
}

export default PurpleMap
