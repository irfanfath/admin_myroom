import React, { Component } from "react";
import Header from "../Component/Navigation/Header";
import Sidebar from "../Component/Navigation/Sidebar";
import axios from "axios";

export default class Profile extends Component{
    state = {
        post: [],
        number: "",
        address: ""
    }

    getPostApi = () => {
        axios.get("https://api.ismyroom.com/about")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    componentDidMount(){
        this.getPostApi()
    }

    handleUpdate = () => {
        const payload = {
            "number" : this.state.number,
            "address" : this.state.address
        }
        const data = payload
        axios.put(`https://api.ismyroom.com/about`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 200){
                alert("berhasil memperbarui data")
            }else {
                alert("gagal memperbarui data")
            }
            this.getPostApi()
        })
    }


    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Profile Anda</h1>
                        <p>Halaman ini untuk merubah data anda</p>
                        <p>{this.state.post.number}</p>
                        <p>{this.state.post.address}</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input" name="number" placeholder="Input Nomor Telepon Baru" required="required" type="text" onChange={(e) => this.setState({number: e.target.value})} />
                                <textarea className="big field w-input" name="address" placeholder="Input Alamat Baru" required="required" onChange={(e) => this.setState({address: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Edit Data" onClick={this.handleUpdate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}