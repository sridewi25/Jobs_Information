import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function NavbarAfterLogin(props) {
  const { loginCbHandler } = props;

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-color sticky-top">
      <div className="container-sm">
        <Link className="nav-link" to="/">
          <h1 className="title-navbar">Job Information</h1>
        </Link>

        <ul className="navbar-nav justify-content-end">
          <li className="nav-item item-style">
            <Link
              className="nav-link"
              to="/"
              onClick={() => logoutHandler()}
              style={{ color: "white" }}
            >
              <span>
                <FontAwesomeIcon icon={faDoorOpen} />
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAfterLogin;
