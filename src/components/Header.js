import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return <>
  <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 d-flex align-items-center">
         <div className="logo">
          <img src="images/logotip.png" className='img-fluid' alt="logo" />
         </div>
         <div>
          <h2>Damage Detection App</h2>
         </div>
        </div>
        <div className="col-6 d-flex align-items-center flex-row-reverse">
          <div className="loginbutton">
            <a href="Home">
            <button className="btn btn-primary btn-lg">Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>
};

export default Header
