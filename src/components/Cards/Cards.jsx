import React from "react";
import "./Cards.css";
import cardImg from "../../images/murad.webp";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards_container">
        <div className="card">
          <Link>
            <div className="card_img">
              <img src={cardImg} alt="cardImg" />
            </div>
            <div className="card_body">
              <h4>Murad Mammadov</h4>
              <h6>Telimci,bloger</h6>
              <span><FiUser />
              108 Destekci</span>
              <ul>
              <li><Link></Link></li>
              <li><Link></Link></li>
              <li><Link></Link></li>
              </ul>
            </div>
          </Link>
        </div>
        <div className="card">
        <Link>
          <div className="card_img">
            <img src={cardImg} alt="cardImg" />
          </div>
          <div className="card_body">
            <h4>Murad Mammadov</h4>
            <h6>Telimci,bloger</h6>
            <span><FiUser />
            108 Destekci</span>
            <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            </ul>
          </div>
        </Link>
      </div>
      <div className="card">
      <Link>
        <div className="card_img">
          <img src={cardImg} alt="cardImg" />
        </div>
        <div className="card_body">
          <h4>Murad Mammadov</h4>
          <h6>Telimci,bloger</h6>
          <span><FiUser />
          108 Destekci</span>
          <ul>
          <li><Link></Link></li>
          <li><Link></Link></li>
          <li><Link></Link></li>
          </ul>
        </div>
      </Link>
    </div>
    <div className="card">
    <Link>
      <div className="card_img">
        <img src={cardImg} alt="cardImg" />
      </div>
      <div className="card_body">
        <h4>Murad Mammadov</h4>
        <h6>Telimci,bloger</h6>
        <span><FiUser />
        108 Destekci</span>
        <ul>
        <li><Link></Link></li>
        <li><Link></Link></li>
        <li><Link></Link></li>
        </ul>
      </div>
    </Link>
  </div>
      </div>
    </div>
  );
};

export default Cards;
