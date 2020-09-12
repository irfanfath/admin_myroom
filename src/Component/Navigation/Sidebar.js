import React, { Component } from "react";

export default class Sidebar extends Component {
    render(){
        return(
            <header className="header main-column">
                <h1 className="logo">IsMyRoom</h1>
                {/* <div className="footer-wrapper w-clearfix">
                    <a className="footer-nav-link w-inline-block" href="/"><img src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3149a593f6edf410006e0_home-icon.svg" /></a>
                    <a className="footer-nav-link w-inline-block" href="http://www.twitter.com/webflowapp"><img src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f2d48b593f6edf410003c1_twitter-icon.svg" /></a>
                    <a className="footer-nav-link w-inline-block" href="http://www.facebook.com/webflow"><img src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f2d533ba5496e141000386_facebook-icon.svg" /></a>
                    <a className="footer-nav-link w-inline-block" href="/subscribe"><div className="subscribe">Subscribe</div></a>
                </div> */}
            </header>
        )
    }
}