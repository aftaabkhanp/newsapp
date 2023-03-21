import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";
export default function NavLinks(props) {
  return (
    <div className="NavLinks">
      <ul className="navs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/science">Science</Link>
        </li>
        <li>
          <Link to="/health">Health</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/" onClick={props.handleLogout}>
            SignOut
          </Link>
        </li>
      </ul>
    </div>
  );
}
