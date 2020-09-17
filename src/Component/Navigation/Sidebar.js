import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
    handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload()
    }

    render(){
        return(
            <header className="header main-column">
                <h1 className="logo">IsMyRoom</h1>
                <div className="footer-wrapper w-clearfix">
                    <NavLink className="footer-nav-link w-inline-block" to="/"><img src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3149a593f6edf410006e0_home-icon.svg" alt="" /></NavLink>
                    <NavLink className="footer-nav-link w-inline-block" to="/listtestimoni"><div className="subscribe">Testimonials</div></NavLink>
                    <NavLink className="footer-nav-link w-inline-block" to="/profile"><div className="subscribe">Profile</div></NavLink>
                    <div className="footer-nav-link w-inline-block" onClick={this.handleLogout} ><div className="subscribe">Logout</div></div>                    
                </div>
            </header>
        )
    }
}