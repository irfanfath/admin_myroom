import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";

export default class AddApart extends Component{
    constructor(props){
        super()
            this.state = {
                post: [],
                name: "",
                startprice: "",
                description: "",
                facility: "",
                image: null,
                location: "",
                showLoader: false
            }
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

    // handleSubmit = () => {
    //     const payload = {
    //         "name" : this.state.name,
    //         "description" : this.state.description,
    //         "facility" : this.state.facility,
    //         // "image" : this.state.image,
    //         "location" : this.state.location
    //     }
    //     const imageData = new FormData()
    //     imageData.append("image", this.state.image)
    //     const data = payload
    //     axios.post("https://api.ismyroom.com/apartments", data, imageData, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             Accept: "application/json",
    //             "Content-Type": "multipart/form-data"
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //         if(res.status === 201){
    //             alert("berhasil menambahkan data")
    //         }else {
    //             alert("gagal menambahkan data")
    //         }
    //         this.getPostApi()
    //     })
    // }


    handleSubmit = () => {
        this.setState({
            showLoader: true
          })
        const data = new FormData()
        data.append("name", this.state.name)
        data.append("startprice", this.state.startprice)
        data.append("description", this.state.description)
        data.append("facility", this.state.facility)
        data.append("location", this.state.location)
        data.append("image", this.state.image)

        axios.post("https://api.ismyroom.com/apartments", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("berhasil menambahkan data")
                this.props.history.push('/listsewa')
                this.setState({showLoader: false})
            }else {
                alert("gagal menambahkan data")
                this.setState({showLoader: false})
            }
        })
    }

    LoaderModal = () => {
        return (
            <div id="posisi-loader">
              <div className="title-loader">Please Wait...</div>
            </div>
        )
      }

    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Apartemen Baru</h1>
                        <p>Halaman ini untuk menambahkan apartemen baru</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})}/>
                                <input className="field w-input" name="startprice" placeholder="Harga Minimum" required="required" type="text" onChange={(e) => this.setState({startprice: e.target.value})}/>
                                <div className="lokasi-menu-list">
                                    <div className="title-lokasi">* List Lokasi Tersedia :</div>
                                        {
                                            this.state.post.map((data,key)=> 
                                                <div className="title-lokasi" key={key}>- {data.name}</div>
                                            )
                                        }
                                    <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="text" onChange={(e) => this.setState({location: e.target.value})}/>
                                    {/* {
                                        this.state.post.map((data,key) => {
                                            return (
                                                <div className="margin-radio" key={key}>
                                                    <input type="radio" value={data.id} name="locationId" className="radio-menu-lokasi" onChange={(e) => this.setState({locationId: e.target.value})} /><div className="title-radio-lokasi">{data.name}</div>
                                                </div> 
                                            )
                                        })
                                    }
                                     <button type="button" onClick={this.onSubmit} className="btn">Save</button> */}
                                </div>
                                {/* <input className="field w-input" name="gambar" placeholder="Gambar" required="required" type="text" onChange={(e) => this.setState({image: e.target.value})}/> */}
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                </div>
                                <textarea className="big field w-input" name="description" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Tambah Apartemen" onClick={this.handleSubmit} />
                                {
                                    this.state.showLoader ? <this.LoaderModal /> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}