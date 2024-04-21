import React from "react";
import "./Creators.css";
import Cards from "../../components/Cards/Cards";

const Creators = () => {
  return (
    <>
      <div className="back creatorBack"></div>
      <div className="creators">
        <div>
          {" "}
          <h1 style={{ fontSize: "40px" }}>Üzvlərimiz </h1>{" "}
          <span style={{ fontSize: "16px" }}>🎉1813 Yaradıcı</span>
        </div>
        <p style={{ fontSize: "18px", marginTop: "14px" }}>
          Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.
        </p>
        <Cards />
      </div>
    </>
  );
};

export default Creators;
