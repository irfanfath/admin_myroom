import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";

export default class Testimoni extends Component{
    state = {
        name: "",
        testimonial: ""
    }

    handlePost = () => {
        const payload = {
            "name" : this.state.name,
            "testimonial" : this.state.testimonial
        }
        const data = payload
        axios.post(`https://api.ismyroom.com/testimonials`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 200){
                alert("berhasil menambahkan testimonials")
            }else {
                alert("gagal menambahkan testimonials")
            }
        })
    }


    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Testimonials</h1>
                        <p>Halaman ini untuk menambah data testimonials anda</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input" name="number" placeholder="Nama Pelanggan" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <textarea className="big field w-input" name="address" placeholder="Testimonials" required="required" onChange={(e) => this.setState({testimonial: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Tambah Data" onClick={this.handlePost} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}