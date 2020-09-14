import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";
import UploadImg from "../../Component/Form/UploadImg";

export default class EditApart extends Component{
    constructor(props){
        super(props)
            this.state = {
                post: [],
                name: "",
                description: "",
                facility: "",
                image: null,
                LocationId: ""
            }
    }

    componentDidMount(){
        this.getPostApi()
    }

    getPostApi = () => {
        axios.get("https://cooperative-express.herokuapp.com/locations")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    handleSubmit = () => {
        // const data = new FormData()
        const payload = {
            "name" : this.state.name,
            "description" : this.state.description,
            "facility" : this.state.facility,
            "image" : this.state.image,
            "LocationId" : this.state.LocationId
        }
        const data = payload
        // data.append("name", this.state.name)
        axios.post("https://cooperative-express.herokuapp.com/apartments", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 200){
                alert("berhasil menambahkan data")
            }else {
                alert("gagal menambahkan data")
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
                        <h1>Edit Data Apartemen</h1>
                        <p>Halaman ini untuk merubah data apartemen yang akan disewakan</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="fasilitas" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})}/>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="layanan">Lokasi</label>
                                    {
                                        this.state.post.map((data,key) => {
                                            return (
                                                <div className="margin-radio" key={key}>
                                                    <input type="radio" value={data.id} name="lokasi" className="radio-menu-lokasi" onChange={(e) => this.setState({LocationId: e.target.value})}  /><div className="title-radio-lokasi">{data.name}</div>
                                                </div> 
                                            )
                                        })
                                    }
                                </div>
                                <UploadImg/>
                                <input className="field w-input" name="gambar" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Tambah Apartemen" onClick={this.handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}