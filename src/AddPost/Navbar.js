import React from "react";
import { Link, useHistory } from "react-router-dom";
import './css/bootstrap.css';
import './css/theme.css';
const Navbar = () => {
  return (
    <>
      <header data-testid="header">
        <nav className="navbar navbar-expand-lg navbar-light color navbar-float">
          <div className="container">
            {/* <a href="/" className="navbar-brand">
              ITSA<span className="text-primary"> VIT</span>
            </a> */}
            <Link class="navbar-brand" to="/">
              Admin<span className="text-primary">Matrijhadanshi</span>
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                <li className="nav-item active">
                  <Link class="nav-link" to="/">
                    Add Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link" to="/deleteposts">
                    Delete Posts
                  </Link>
                </li>
                {/*                 
                <li className="nav-item">
                  <Link class="nav-link" to="/contactus">Contact</Link>
                </li>
                 */}
              </ul>
              <div className="ml-auto">
                <></>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
