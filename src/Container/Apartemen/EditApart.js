import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";

export default class EditApart extends Component{
    constructor(props){
        super()
            this.state = {
                post: [],
                name: "",
                description: "",
                facility: "",
                image: null,
                location: ""
            }
    }

    componentDidMount(){
        this.getPostApi()
    }

    getPostApi = () => {
        let id = this.props.match.params.idApart
        axios.get(`https://api.ismyroom.com/apartments/${id}`)
        .then((result)=>{
            this.setState({
                post: result.data,
            })
        }) 
    }

    handleUpdate = (id) => {
        const payload = {
            "name" : this.state.name,
            "description" : this.state.description,
            "facility": this.state.facility,
            "location": this.state.location,
            "image": this.state.image
        }
        const data = payload
        axios.patch(`https://api.ismyroom.com/apartments/${id}`, data, {
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

    // handleSubmit = () => {
    //     const data = new FormData()

    //     data.append("name", this.state.name)
    //     data.append("description", this.state.description)
    //     data.append("facility", this.state.facility)
    //     data.append("location", this.state.location)
    //     data.append("image", this.state.image)

    //     axios.post("https://api.ismyroom.com/apartments", data, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             "Content-Type": "multipart/form-data"
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //         if(res.status === 200){
    //             alert("berhasil menambahkan data")
    //         }else {
    //             alert("gagal menambahkan data")
    //         }
    //     })
    // }

    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Edit Apartemen</h1>
                        <p>Halaman ini untuk merubah data apartemen</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" defaultValue={this.state.post.name} onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" defaultValue={this.state.post.facility} onChange={(e) => this.setState({facility: e.target.value})}/>
                                <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="text" defaultValue={this.state.post.location} onChange={(e) => this.setState({location: e.target.value})}/>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                </div>
                                <textarea className="big field w-input" name="description" placeholder="Deskripsi" required="required" defaultValue={this.state.post.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Edit Apartemen" onClick={this.handleUpdate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}