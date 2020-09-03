import React, { Component } from "react";

class Sidebar extends Component {
    handleMoveHome = () => {
        window.location.href = "/"
    }
    handleMoveDataSewa = () => {
        window.location.href = "#/datasewa"
    }
    handleMoveDataJual = () => {
        window.location.href = "#/datajual"
    }
    handleMoveAddDataSewa = () => {
        window.location.href="#/adddatasewa"
    };
    handleMoveAddDataJual = () => {
        window.location.href="#/adddatajual"
    };
    handleMoveDataTitip = () => {
        window.location.href="#/datatitip"
    };
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
              <div className="logo">
                  <div className="simple-text logo-normal">
                      IsMyRoom
                  </div>
              </div>
              <div className="sidebar-wrapper">
                  <ul className="nav">
                      <li className="nav-item active">
                          <div className="nav-link" onClick={this.handleMoveHome}>
                              <div className="title-sidebar">Dashboard</div>
                          </div>
                      </li>
                      <li className="nav-item ">
                          <div className="nav-link" onClick={this.handleMoveDataJual}>
                              <div className="title-sidebar">Daftar Produk Jual</div>
                          </div>
                      </li>
                      <li className="nav-item ">
                          <div className="nav-link" onClick={this.handleMoveDataSewa}>
                              <div className="title-sidebar">Daftar Produk Sewa</div>
                          </div>
                      </li>
                      <li className="nav-item ">
                          <div className="nav-link" onClick={this.handleMoveAddDataJual}>
                              <div className="title-sidebar">Tambah Produk Jual</div>
                          </div>
                      </li>
                      <li className="nav-item ">
                          <div className="nav-link" onClick={this.handleMoveAddDataSewa}>
                              <div className="title-sidebar">Tambah Produk Sewa</div>
                          </div>
                      </li>
                      <li className="nav-item ">
                          <div className="nav-link" onClick={this.handleMoveDataTitip}> 
                              <div className="title-sidebar">Titip Sewa/Jual</div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
        )
    }
}

export default Sidebar;