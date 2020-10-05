import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render(){
        return(
            <nav className="navbar w-nav" data-animation="default" data-collapse="small" data-duration="400">
                <nav className="nav-menu w-nav-menu" role="navigation">
                    <NavLink to="/listsewa" className="nav-link w-nav-link">List Apartement</NavLink>
                    <NavLink to="/location" className="nav-link w-nav-link">List Lokasi</NavLink>
                    <NavLink to="/testimoni" className="nav-link w-nav-link">Tambah Testimoni</NavLink>
                    <NavLink to="/profile" className="nav-link w-nav-link">Update Profile</NavLink>
                    {/* <NavLink to="/facility" className="nav-link w-nav-link">Fasilitas</NavLink> */}
                    {/* <NavLink to="/feature" className="nav-link w-nav-link">Fitur Unit</NavLink> */}
                </nav>
            </nav>
        )
    }
}