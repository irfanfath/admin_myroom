import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";
// import UploadImg from "../../Component/Form/UploadImg";
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

export default class AddUnitJual extends Component{
    constructor(props){
        super()
            this.state = {
                post: [],
                apartmentId: localStorage.getItem('apart'),
                unitCode: "",
                name: "",
                description: "",
                facility: "",
                feature: "",
                image: null,
                status: "",
                images: [],
                files: null,
                showLoader: false
            }
    }

    setFile = (images) => {
        this.setState({ images : [...this.state.images, images] }, () => console.log('state.images =>', this.state.images))
    }

    handleSubmit = () => {
        this.setState({showLoader: true})
        const data = new FormData()
        data.append("unitCode", this.state.unitCode)
        data.append("name", this.state.name)
        data.append("description", this.state.description)
        data.append("facility", this.state.facility)
        data.append("feature", this.state.feature)
        data.append("status", this.state.status)
        data.append("apartmentId", this.state.apartmentId)
        this.state.images.forEach((file) => data.append('images', file));

        axios.post("https://api.ismyroom.com/units/test", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("Silahkan masukan harga")
                this.setState({showLoader: false})
                localStorage.setItem('idharga', res.data.id);
                this.props.history.push('/hargaunitjual')
            }else {
                alert("Gagal menambahkan data")
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
        const label = this.state.images.length > 0? this.state.images[this.state.images.length -1].name : 'Klik atau drop gambar yang akan dimasukan disini';
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Unit Baru</h1>
                        <p>Halaman ini untuk menambahkan unit baru yang akan disewakan</p>
                        <div className="form-wrapper w-form">
                                <input className="field w-input" name="nama" placeholder="Nama Unit" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="kode" placeholder="Kode Unit" required="required" type="text" onChange={(e) => this.setState({unitCode: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})} />
                                <input className="field w-input" name="feature" placeholder="Kelengkapan Unit" required="required" type="text" onChange={(e) => this.setState({feature: e.target.value})} />
                                <div className="lokasi-menu-list">
                                    <label htmlFor="status">Status Unit</label>
                                    <div className="margin-radio">
                                    <input type="radio" value="available" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Tersedia</div>
                                    </div>
                                    <div className="margin-radio">
                                    <input type="radio" value="sold" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Terjual</div>
                                    </div>
                                </div>
                                <div className="lokasi-menu-list">
                                    <StyledDropZone onDrop={this.setFile} >{label}</StyledDropZone>
                                </div>
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Selanjutnya" onClick={this.handleSubmit} />                                  
                                {
                                    this.state.showLoader ? <this.LoaderModal /> : null
                                }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}