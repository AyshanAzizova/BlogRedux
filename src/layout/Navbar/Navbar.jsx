import React from "react";
import "./Navbar.css";
import logo from "../../images/footerLogo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    
      <nav>
        <div>
          <Link>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/creators'>Üzvlərimiz</Link>
          </li>
          <li>
            <Link to='/bloq'>Bloq</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
        <div>
          <ul>
            <li>Azerbaycan</li>
          </ul>
          |
          <span>
            <Link>Daxil ol</Link>
          </span>
          <span>
            <Link>Qeydiyyat</Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
