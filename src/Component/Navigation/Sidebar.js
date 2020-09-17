import React, { Component } from "react";

export default class Sidebar extends Component {
    render(){
        return(
            <header className="header main-column">
                <h1 className="logo">IsMyRoom</h1>
                <div className="footer-wrapper w-clearfix">
                    <a className="footer-nav-link w-inline-block" href="/"><img src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3149a593f6edf410006e0_home-icon.svg" /></a>
                    <a className="footer-nav-link w-inline-block" href="/subscribe"><div className="subscribe">Testimonials</div></a>
                    <a className="footer-nav-link w-inline-block" href="/subscribe"><div className="subscribe">Profile</div></a>
                    <a className="footer-nav-link w-inline-block" href="/subscribe"><div className="subscribe">Logout</div></a>                    
                </div>
            </header>
        )
    }
}