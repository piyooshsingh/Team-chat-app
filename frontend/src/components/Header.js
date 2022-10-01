import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [loggedin, setLoggedin] = useState(false);
  
  return (
  <nav
    className="navbar navbar-expand-md navbar-dark "
    style={{ backgroundColor: "#490085" }}
  >
    <div className="container">
      <a className="navbar-brand" href="#">
        Brand
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Signup">
             Register
            </NavLink>
          </li>
         
        </ul>
        <ul className="navbar-nav d-flex flex-row me-1">
          <li className="nav-item me-3 me-lg-0">
            {
              loggedin ? 
              <button className='btn btn-danger' onClick={ () => { setLoggedin(false) } }>
                <i class="fas fa-sign-out-alt"></i>  Logout
              </button>
              :
              <button className="btn btn-primary" onClick={() => setLoggedin(true) }>
                <i class="fas fa-sign-in-alt"></i> Login
              </button>
            }            
            
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
        <form className="w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Header