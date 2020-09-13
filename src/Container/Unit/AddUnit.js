import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";

export default class AddUnit extends Component{
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
                                <input className="field w-input" name="harga" placeholder="Harga" required="required" type="email" />
                                <input className="field w-input" name="fasilitas" placeholder="Fasilitas" required="required" type="text" />
                                <input className="field w-input" name="lokasi" placeholder="Kelengkapan Unit" required="required" type="text" />
                                <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="text" />
                                <label htmlFor="layanan">status</label>
                                    <input type="radio" value="Rent" name="layanan" className="radio-menu-layanan" /> Tersedia
                                    <input type="radio" value="Sale" name="layanan" className="radio-menu-layanan" /> Tersewa
                                <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="file" />
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