import React, { Component } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


class AddDataJual extends Component {
    constructor(props){
        super(props)

        this.state = {
            nama: "",
            fasilitas: "",
            unit: "",
            harga: 0,
            deskripsi: "",
            status: "tersedia",
            image: null
        }
    }

    handleSubmit = () => {
        const data = new FormData()

        data.append("nama", this.state.nama)
        data.append("harga", this.state.harga)
        data.append("lokasi", this.state.lokasi)
        data.append("fasilitas", this.state.fasilitas)
        data.append("unit", this.state.unit)
        data.append("deskripsi", this.state.deskripsi)
        data.append("status", this.state.status)
        data.append("main_image", this.state.image)

        axios.post("http://irfanfath.site/myroomAPi/addproduk", data).then((res) => {
            console.log(res)
        })
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
                                        <h4 className="card-title">Tambah Daftar Jual Baru</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Nama Apartemen</label>
                                                        <input type="text" className="form-control" onChange={(e) => this.setState({nama: e.target.value})} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Unit</label>
                                                        <input type="text" className="form-control" onChange={(e) => this.setState({unit: e.target.value})} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Fasilitas</label>
                                                        <input type="text" className="form-control" onChange={(e) => this.setState({fasilitas: e.target.value})}  />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Deskripsi</label>
                                                        <input type="text" className="form-control" onChange={(e) => this.setState({deskripsi: e.target.value})}  />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Harga</label>
                                                        <input type="number" className="form-control" onChange={(e) => this.setState({harga: e.target.value})} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bmd-label-floating">Lokasi</label>
                                                        <input type="text" className="form-control" onChange={(e) => this.setState({lokasi: e.target.value})} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Status:</label><p></p>
                                                            <select name="status" id="status">
                                                                <option value="terjual" onClick={(e) => this.setState({status: "terjual"})}>Terjual</option>
                                                                <option value="tersedia" onClick={(e) => this.setState({status: "tersedia"})}>Tersedia</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="Neon-input-dragdropbox">
                                                        <label className="bmd-label-floating">Upload Main Image</label><p></p>
                                                        <input type="file" id="myFile" name="filename" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="Neon-input-dragdropbox">
                                                        <label className="bmd-label-floating">Upload Sub Image</label><p></p>
                                                        <input type="file" id="myFile" name="filename"/>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-primary">
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>  
            </div>
            </>
        )
    }
}

export default AddDataJual;