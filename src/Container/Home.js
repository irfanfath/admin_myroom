import React, { Component } from "react";
import ListData from "../Component/ListData";
 
class Home extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
              <div className="logo">
                  <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                      Creative Tim
                  </a>
              </div>
              <div className="sidebar-wrapper">
                  <ul className="nav">
                      <li className="nav-item active">
                          <a className="nav-link">
                              <p>Dashboard</p>
                          </a>
                      </li>
                      <li className="nav-item ">
                          <a className="nav-link">
                              <p>Daftar Produk</p>
                          </a>
                      </li>
                      <li className="nav-item ">
                          <a className="nav-link">
                              <p>Tambah Produk</p>
                          </a>
                      </li>
                      <li className="nav-item ">
                          <a className="nav-link">
                              <p>Titip Sewa/Jual</p>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <ListData />
      </div>

    );
  }
}
 
export default Home;