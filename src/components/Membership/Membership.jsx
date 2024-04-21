import React from "react";
import "./Membership.css";
import memberShip from "../../images/membership.webp";

const Membership = () => {
  return (
    <div className="memberShip">
    <div className="circle">
    <div className="circleIn">
    </div>
    </div>
      <div>
        <img src={memberShip} alt="memberShip" />
      </div>
      <div className="membership_right">
       <div className="membership_right_content">
       <button>ABUNƏLİK</button>
       <h3>Abunəlik təklif edin</h3>
       <p style={{fontSize:"18px",color:'gray'}}>
         Aylıq abunəlik kanalı yaradaraq, izləyicilərinizin eksklüziv üzvlərə
         çevrilməsinə imkan yaradın ki, sizə hər ay müxtəlif qiymət
         dərəcələrində dəstək ola bilsinlər. Rollar, eksklüziv kontent və ya
         fiziki əşyalar kimi unikal hədiyyələrlə üzvləri mükafatlandırın.
       </p>
       </div>
      </div>
    </div>
  );
};

export default Membership;
