import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";
import Feature from "../Feature";
import UploadImg from "../../Component/Form/UploadImg";

export default class AddUnit extends Component{
    state = {
        post: [],
        postFeature: []
    }

    componentDidMount(){
        axios.get("https://cooperative-express.herokuapp.com/facilities")
        .then((result)=>{
            this.setState({
                post: result.data,
            })
        })
        this.getFeature()
    }

    getFeature = () => {
        axios.get("https://cooperative-express.herokuapp.com/features")
        .then((result)=>{
            this.setState({
                postFeature: result.data
            })
        })
    }

    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Unit Baru</h1>
                        <p>Halaman ini untuk menambahkan unit baru yang akan disewakan</p>
                        <div className="form-wrapper w-form">
                            <form data-name="Suggest" name="wf-form-suggest">
                                <input className="field w-input" name="nama" placeholder="Nama Unit" required="required" type="text" />
                                <label htmlFor="harga">Notes : Kosongkan Apabila Harga Tidak Tersedia Di Bulan Tertentu</label>
                                <input className="field first w-input" name="harga1" placeholder="Harga 1 Bulan" required="required" type="text" />
                                <input className="field mid w-input" name="harga2" placeholder="Harga 6 Bulan" required="required" type="text" />
                                <input className="field last w-input" name="harga3" placeholder="Harga 12 Bulan" required="required" type="text" />
                                <div className="lokasi-menu-list">
                                    <label htmlFor="Fasilitas">Fasilitas</label>
                                    {
                                        this.state.post.map((data,key) => {
                                            return (
                                                <div className="margin-radio" key={key}>
                                                    <input type="checkbox" value={data.id} name="LocationId" className="radio-menu-lokasi" /><div className="title-radio-lokasi">{data.name}</div>
                                                </div> 
                                            )
                                        })
                                    }
                                </div>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="Feature">Kelengkapan Unit</label>
                                    {
                                        this.state.postFeature.map((data,key) => {
                                            return (
                                                <div className="margin-radio" key={key}>
                                                    <input type="checkbox" value={data.id} name="LocationId" className="radio-menu-lokasi" /><div className="title-radio-lokasi">{data.name}</div>
                                                </div> 
                                            )
                                        })
                                    }
                                </div>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="status">Status Unit</label>
                                    <div className="margin-radio">
                                    <input type="radio" value="tersedia" name="status" className="radio-menu-lokasi" /><div className="title-radio-lokasi">Tersedia</div>
                                    </div>
                                    <div className="margin-radio">
                                    <input type="radio" value="tersewa" name="status" className="radio-menu-lokasi" /><div className="title-radio-lokasi">Tersewa</div>
                                    </div>
                                </div>
                                <UploadImg/>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" />
                                </div>
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required"></textarea>
                                <input className="button w-button" type="submit" value="Tambah Unit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}