import React from "react";
import "./Bexshish.css";
import bexshish from "../../images/bexshish.webp";
import bexshish2 from "../../images/bexshish2.webp";

const Bexshish = () => {
  return (
    <div className="bexshish">
        <div className="circle">
        <div className="circleIn"></div>
        </div>
      <div className="bexshish_left">
        <img src={bexshish} alt="bexshish" />
      </div>
      <div className="bexshish_right">
        <div className="bexshish_right_content">
          <span>DƏSTƏK AL</span>
          <h2>Bəxşiş qəbul edin</h2>
          <p>
            Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları və bəxşiş
            almaq üçün unikal, əyləncəli və bəsit bir metodu təqdim edir!
            Kofealdan bəxşiş qutusu kimi istifadə edərək, dəstəkçilərinizin
            məşğuliyyətinizə töhfə verməsinə imkan verə bilərsiniz.
          </p>
          <img src={bexshish2} alt="bexshish" />
        </div>
      </div>
    </div>
  );
};

export default Bexshish;
