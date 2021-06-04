import React from 'react';
import logo from './images/logo.JPG';
import './App.css';
import {Link} from 'react-router-dom';

export default function login() {
  return(
    <body>
    <div>
      <img src={logo} className="logoclass" alt="logo"/>
        <div className="loginbox">
          <div>
            ID &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" className="id"/>
          </div>
          <div>
            PW &nbsp;&nbsp;
            <input type="password" className="id"/>
          </div>

          
          <Link to="./home">
            <button className="button">Sign-up</button>
          </Link>
          
          <Link to="./home">
            <button className="button">Log-in</button>
          </Link>

        </div>
      </div>
  </body>
  );
}