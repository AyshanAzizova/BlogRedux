import React from "react";
import "./MehsulXidmet.css";
import { GoCheck } from "react-icons/go";
import mehsulXidmet from "../../images/mehsulXidmet.webp";

const MehsulXidmet = () => {
  return (
    <div style={{background:'#f9f9ff'}}>
    <div className="mehsulXidmet">
    <div className="circle" style={{right:'100%'}}>
    <div className="circleIn"></div>
    </div>
      <div className="mehsulXidmet_left">
       <div className="mehsulXidmet_left_content">
       <span>ONLAYN MAĞAZA</span>
       <h2>Məhsul və Xidmətlərinizi satın</h2>
       <p>
         Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə
         edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə məhsul və
         ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!
       </p>
       <h5>`Nə satmaq olar?:</h5>
       <ul style={{ display: "flex" }}>
         <ul>
           <li>
             <GoCheck />
             Fiziki məhsul
           </li>
           <li>
             <GoCheck />
             Digital məhsul
           </li>
           <li>
             <GoCheck />
             Affiliate məhsul
           </li>
         </ul>
         <ul>
           <li>
             <GoCheck />
             Xidmət
           </li>
           <li>
             <GoCheck />
             Tədbirə giriş
           </li>
           <li>
             <GoCheck />
             Çap işləri
           </li>
         </ul>
       </ul>
       </div>
      </div>
      <div className="mehsulXidmet_right">
        <img src={mehsulXidmet} alt="mehsulXidmet" />
      </div>
    </div>
    </div>
  );
};

export default MehsulXidmet;
