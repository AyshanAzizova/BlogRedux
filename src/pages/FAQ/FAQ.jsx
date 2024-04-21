import React from "react";
import "./FAQ.css";
import Overlay from "../../components/Overlay/Overlay";
import AccordionUsage from "../../components/Accordion/Accordion";

const FAQ = () => {
  return (
    <div>
      <Overlay/>
     
      
      <div className="faqAccord">
      <h1>Sual-Cavab</h1>

      <p>Esas > Sual-Cavab</p>
      <AccordionUsage /></div>
    </div>
  );
};

export default FAQ;
