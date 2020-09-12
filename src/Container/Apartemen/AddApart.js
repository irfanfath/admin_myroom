import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";

export default class AddApart extends Component{
    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Apartemen Baru</h1>
                        <p>Halaman ini untuk menambahkan apartemen baru yang akan disewakan</p>
                        <div className="form-wrapper w-form">
                            <form data-name="Suggest" name="wf-form-suggest">
                                <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" />
                                <input className="field w-input" name="harga" placeholder="Harga" required="required" type="email" />
                                <input className="field w-input" name="fasilitas" placeholder="Fasilitas" required="required" type="text" />
                                <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="text" />
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required"></textarea>
                                <input className="button w-button" type="submit" value="Tambah Apartemen" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}