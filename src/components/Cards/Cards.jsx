import React, { useEffect } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreators } from "../../Slice/CreatorSlice";

const Cards = () => {
  let dispatch = useDispatch();

  const Creators = useSelector((state)=>state.creators.items);

  useEffect(() => {
    dispatch(fetchCreators());
  }, [dispatch]);
  return (
    <div className="cards">
      <div className="cards_container">
       {
        Creators && 
        Creators.map((item)=>(
          <div className="card">
          <Link>
            <div className="card_img">
              <img src={item.image} alt="cardImg" />
            </div>
            <div className="card_body">
              <h3>{item.title}</h3>
              <h5>{item.type}</h5>
              <span><FiUser />
              {item.count} Destekci</span>
              <ul>
              <li><Link></Link></li>
              <li><Link></Link></li>
              <li><Link></Link></li>
              </ul>
            </div>
          </Link>
        </div>
        ))
       }
       
  
      </div>
    </div>
  );
};

export default Cards;
