// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          
            <div className="footer-links">
              <a href="/home">Home</a>
              <a href="/download">Downloads</a>
              <a href="About">About Us</a>
              <a href="/Contact">Contact</a>
            </div>
            <div className="footer-text">
              <p>
                &copy; {new Date().getFullYear()} <a href="a">Cyborg Gaming</a> Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
