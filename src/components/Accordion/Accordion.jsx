import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoAddOutline } from "react-icons/io5";

import "./Accordion.css";

export default function AccordionUsage() {
  return (
    <div className="accord">
    <span className="faq">FAQ</span>
    <h1>Sizi maraqlandıran suallar</h1>
    <div className="container">
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />
        }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Kofe.al nədir?
        </AccordionSummary>
        <AccordionDetails>
          Kofe.al, pərəstişkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən
          sadə yoldur. Siz bəxşişlər qəbul edə, üzvlük səviyyələri yarada,
          onlayn mağaza aça və 9% platforma haqqı ilə komissiya ala bilərsiniz.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Kofe.al kimlər üçündür?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Ödənişi necə alacağam?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Xidmət haqqı nə qədərdir?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Ödənilən vəsaitlər ilə kofe almalıyam?

        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Kofe.al ilə nə qədər qazana bilərəm?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Kofe.al xarici analoqlardan fərqi nədir?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Xarici pərəstişkarlarımdan bəs ödəniş ala bilərəm?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Kofe.al kimindir?        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Sizin xeyriniz nədir?

        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="ay">
        <AccordionSummary
          expandIcon={<IoAddOutline />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Kofe.al kimlər üçündür?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
