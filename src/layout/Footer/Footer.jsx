import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../images/footerLogo.webp";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <img src={logo} alt="logo" />
          <p>
            Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq.
            Özünüzü tanıtmaqdan çəkinməyin!
          </p>
        </div>
        <ul>
          <h3>Xüsusiyyətlər</h3>
          <li>
            <Link>Destek</Link>
          </li>
          <li>
            <Link>Abunəlik</Link>
          </li>
          <li>
            <Link>Mağaza</Link>
          </li>
          <li>
            <Link>QR kodlar</Link>
          </li>
          <li>
            <Link>Patreon Alternativi</Link>
          </li>
        </ul>
        <ul>
          <h3>İnteqrasiyalar</h3>
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>Instagram</Link>
          </li>
          <li>
            <Link>Tiktok</Link>
          </li>
          <li>
            <Link>Telegram</Link>
          </li>
          <li>
            <Link>Wordpress</Link>
          </li>
        </ul>
        <ul>
          <h3>Kofeal</h3>
          <li>
            <Link>Haqqımızda</Link>
          </li>
          <li>
            <Link>Qaydalar</Link>
          </li>
          <li>
            <Link>Məxfilik</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-bottom">
        Copyright © 2024 <span>BONPARA</span> layihəsi. Bütün hüquqlar qorunur.
      </div>
    </div>
  );
};

export default Footer;
