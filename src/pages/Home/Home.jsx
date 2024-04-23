import React from "react";
import './Home.css'
import AccordionUsage from "../../components/Accordion/Accordion";
import Brand from "../../components/Brand/Brand";
import PurpleMap from "../../components/PurpleMap/PurpleMap";
import Membership from "../../components/Membership/Membership";
import MehsulXidmet from "../../components/MehsulXidmet/MehsulXidmet";
import Bexshish from "../../components/Bexshish/Bexshish";
import Yarat from "../../components/Yarat/Yarat";
import CreatorsSection from "../../components/CreatorsSection/CreatorsSection";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <>
      <Yarat/>
      <CreatorsSection/>
      <div  className="homeCards">
      <span>ÜZVLƏRİMİZ</span>
      <h1>Top bəxşiş toplayanlar</h1>
      <p>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
      <Cards/>
      </div>
      <Bexshish />
      <MehsulXidmet />
      <Membership />
      <div className="homeFaq" style={{textAlign:"center"}}>
      <span>FAQ</span>
      <h1>Sizi Maraqlandıran Suallara Cavablar</h1>
      <AccordionUsage />      
      </div>
      <Brand />
      <PurpleMap />
    </>
  );
};

export default Home;
