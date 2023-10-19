import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
         <Link className="navbar-brand" to={"/"}>Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/Count"}>Count</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/Shop"}>Shop</Link>
              </li>
              <li className="nav-item">
              <Link to="/User/1111" className="nav-link" >User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
