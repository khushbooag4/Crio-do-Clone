import React from 'react';
import './Navbar.css';
import Main from '../Main/Main';

function Navbar() {
    return (
      <>
        <nav>
            <div className="navbar">
                <img src="/Images/logo.webp" className ="logo" alt =" " />
                
                <div className="nav">
                      <div className="navmenu">
                         <h2 className="subtext">Programs <i className="fas fa-angle-down"></i></h2>
                      </div>
                    <div className="navmenu">
                      <h2 className="subtext">Hire Crio Developers</h2>
                    </div>
                    <div className="navmenu">
                      <h2 className="subtext">Projects</h2>
                    </div>
                    <div className="navmenu">
                      <h2 className="subtext">About</h2>
                    </div>
                    <div className="navmenu">
                      <h2 className="subtext">Blog</h2>
                    </div>
                    <div className="navmenu">
                      <button className="btn">Sign In</button>
                    </div>
                    <div className="navmenu">
                      <button className="skeleton-btn btn">Book Your Free Trail<i className="fas fa-location-arrow"></i></button>
                    </div>
                </div>
              </div>
        </nav>
        
        </>
    )
}

export default Navbar
