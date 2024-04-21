import React from "react";
import "./Yarat.css";
import bes from '../../images/500.svg'

const Yarat = () => {
  return (
    <div className="yarat">
      <div className="yarat_content">
        <span>
          Backed by <img src={bes} alt="bes"/> brand Global
        </span>
        <h1>
          Rəsm çək , sevdiyin işlə
          məşğul ol, izləyicilərindən dəstək qazan!
        </h1>
        <div className="inputum">
        
        <input type="e-mail" placeholder="kofe.al/username" />
        </div>
        <p>Yarat 🎉 Paylaş 🚀 Qazan ☕ </p>
      </div>
    </div>
  );
};

export default Yarat;
