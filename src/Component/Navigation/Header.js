import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render(){
        return(
            <nav className="navbar w-nav" data-animation="default" data-collapse="small" data-duration="400">
                <nav className="nav-menu w-nav-menu" role="navigation">
                    <NavLink to="/listsewa" className="nav-link w-nav-link">Disewakan</NavLink>
                    <NavLink to="/listjual" className="nav-link w-nav-link">Dijual   </NavLink>
                    <NavLink to="/location" className="nav-link w-nav-link">List Lokasi</NavLink>
                </nav>
            </nav>
        )
    }
}