import React from "react";
import "./CreatorsSection.css";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const CreatorsSection = () => {
  return (
    <div className="creatorsSection">
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">Veb Dizayn
        <p>133 Yaradıcı <GoArrowRight />
        </p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">Qrafik dizayn
        <p>153 Yaradıcı <GoArrowRight /></p>
        </Link> 
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">
        Şəxsi inkişaf
        <p>319 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">Yazıçılıq
        <p>143 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">İncəsənət
        <p>170 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">Blog
        <p>317 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">İdman
        <p>98 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
      <div className="creatorsSectionItems">
        <Link className="overlay" to="#">Musiqi
        <p>93 Yaradıcı <GoArrowRight /></p>
        </Link>
      </div>
    </div>
  );
};

export default CreatorsSection;
