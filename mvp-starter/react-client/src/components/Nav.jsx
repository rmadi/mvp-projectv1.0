import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-nav">
        <ul className="nav-ul">
          <Link to="/">
            
            <li className="nav-li">Logout</li>
          </Link>

          <Link to="/signin">
            <li className="nav-li" >Sign/In</li>{" "}
          </Link>
          <Link to='/shop'>
          
            <li className="nav-li">Shop</li>{" "}
          </Link>
          <Link to='home'>
            
            <li className="nav-li-home">Home</li>{" "}
          </Link>
        </ul>
      </nav>
    </div>
  );
}
