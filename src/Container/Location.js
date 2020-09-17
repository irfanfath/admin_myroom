import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
 
class Location extends Component {
    // constructor(props){
    //     super(props)
    //         this.state = {
    //             post: [],
    //             name: ""
    //         }
    // }
    state = {
        post: [],
        name: ""
    }

    componentDidMount(){
        this.getPostApi()
    }

    getPostApi = () => {
        axios.get("https://api.ismyroom.com/locations")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    handleSubmit = () => {
        const payload = {
            "name" : this.state.name
        }
        const data = payload
        axios.post("https://api.ismyroom.com/locations", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("berhasil menambahkan data")
            }else {
                alert("gagal menambahkan data")
            }
            this.getPostApi()
        })
    }

    handleRemove = (id) => {
        axios.delete(`https://api.ismyroom.com/locations/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res)=>{
            if(res.status === 200){
                alert("berhasil menghapus data")
            }else {
                alert("gagal menghapus data")
            }
            this.getPostApi()
        }) 
    }

    // handleUpdate = (id) => {
    //     const payload = {
    //         "name" : this.state.name
    //     }
    //     const data = payload
    //     axios.put(`https://api.ismyroom.com/locations/${id}`, data, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //         if(res.status === 200){
    //             alert("berhasil memperbarui data")
    //         }else {
    //             alert("gagal memperbarui data")
    //         }
    //         this.getPostApi()
    //     })
    // }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <div className="section">
                    <div className="form-wrapper w-form">
                        <div>
                            <input className="field w-input" name="lokasi" placeholder="Nama Lokasi Baru" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                            <input className="button w-button" type="submit" value="Tambah Lokasi" onClick={this.handleSubmit} />
                        </div>
                    </div>
                    <h2>List Lokasi</h2>
                </div>
                {
                    this.state.post.map((data, key)=>
                    <div className="location w-clearfix w-inline-block" key={key}>
                        <section className="article-text-wrapper">
                            <h4 className="thumbnail-title">{data.name}</h4>
                            <div className="article-info-delete tag"  onClick={() => this.handleRemove(data.id)}>Hapus Lokasi</div>
                            {/* <input className="button w-button" type="submit" value="Hapus Lokasi" onClick={() => this.handleRemove(data.id)}/> */}
                            {/* <input className="field w-input" name="lokasi" placeholder="Nama Lokasi Baru" defaultValue={data.name} required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                            <input className="button w-button" type="submit" value="Update Lokasi" onClick={() => this.handleUpdate(data.id)} /> */}
                        </section>
                    </div>
                    )
                }
            </div>
        </div>
    );
  }
}
 
export default Location;