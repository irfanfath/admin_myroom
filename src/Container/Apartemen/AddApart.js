import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";

export default class AddApart extends Component{
    constructor(props){
        super(props)
            this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit() {
        console.log(this.state.LocationId);
    }
    
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
                            <div>
                                <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})}/>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="Lokasi">Lokasi</label>
                                    {
                                        this.state.post.map((data,key) => {
                                            return (
                                                <div className="margin-radio" key={key}>
                                                    <input type="checkbox" value={data.id} name="LocationId" className="radio-menu-lokasi" onChange={(e) => this.setState({LocationId: e.target.value})}  /><div className="title-radio-lokasi">{data.name}</div>
                                                </div> 
                                            )
                                        })
                                    }
                                     <button type="button" onClick={this.onSubmit} className="btn">Save</button>
                                </div>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                </div>
                                <textarea className="big field w-input" name="description" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Tambah Apartemen" onClick={this.handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}