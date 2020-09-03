import React, { Component } from "react";
import Sidebar from "../Component/Sidebar";
import axios from "axios";
 
class Home extends Component {
    state = {
        post: [],
    }

    componentDidMount(){
        axios.get("http://irfanfath.site/myroomAPi/listproduk")
        .then((result)=>{
            this.setState({
                post: result.data.data
            })
        }) 
    }
  render() {
      var jmlsewa = this.state.post;
      var countjml = jmlsewa.length;
    return (
        <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-warning card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">Data</i>
                                    </div>
                                    <p className="card-category">Disewa</p>
                                    <h3 className="card-title">{countjml}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">Data</i>
                                    </div>
                                    <p className="card-category">Dijual</p>
                                    <h3 className="card-title">{countjml}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">Data</i>
                                    </div>
                                    <p className="card-category">Titip Sewa</p>
                                    <h3 className="card-title">75</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-info card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">Data</i>
                                    </div>
                                    <p className="card-category">Titip Jual</p>
                                    <h3 className="card-title">45</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    );
  }
}
 
export default Home;