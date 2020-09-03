import React, { Component } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

class ListDataJual extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("http://irfanfath.site/myroomAPi/listproduk")
        .then((result)=>{
            this.setState({
                post: result.data.data
            })
        }) 
    }
    
    handleMoveEdit = () => {
        window.location.href = "#/edit"
    }
    render() {
        return (
            <>
            <Sidebar/>
            <div className="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title ">Daftar Produk Dijual</h4>
                                        <p className="card-category">Data Produk Dijual</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th>ID</th>
                                                    <th>Nama Apartemen</th>
                                                    <th>Unit</th>
                                                    <th>Lokasi</th>
                                                    <th>Aksi</th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.post.map((post,key)=> {
                                                            return (
                                                                <tr key={key}>
                                                                    <td>{post.id_produk}</td>
                                                                    <td>{post.nama}</td>
                                                                    <td>{post.unit}</td>
                                                                    <td>{post.lokasi}</td>
                                                                    <td className="text-primary">
                                                                        <button className="btn btn-primary" onClick={this.handleMoveEdit}>Edit Data</button>
                                                                        <button className="btn btn-primary">Hapus Data</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ListDataJual;