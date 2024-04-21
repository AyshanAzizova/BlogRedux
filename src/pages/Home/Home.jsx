import React from "react";
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
      <Cards/>
      <Bexshish />
      <MehsulXidmet />
      <Membership />
      <AccordionUsage />
      <Brand />
      <PurpleMap />
    </>
  );
};

export default Home;
