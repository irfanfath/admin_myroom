import React, { Component } from "react";
import Header from "../../Component/Navigation/Header";
import Sidebar from "../../Component/Navigation/Sidebar";
import axios from "axios";
// import UploadImg from "../../Component/Form/UploadImg";
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

export default class AddUnit extends Component{
    constructor(props){
        super()
            this.state = {
                post: [],
                unitCode: "",
                name: "",
                description: "",
                facility: "",
                feature: "",
                image: null,
                status: "",
                images: null,
                apartmentId: "",
                shoeSewa: true
            }
    }

    setFile = (images) => {
        this.setState({ images })
      }


    componentDidMount(){
        axios.get("https://cooperative-express.herokuapp.com/facilities")
        .then((result)=>{
            this.setState({
                post: result.data,
            })
        })
    }

    handleSubmit = () => {
        const data = new FormData()

        data.append("unitCode", this.state.unitCode)
        data.append("name", this.state.name)
        data.append("description", this.state.description)
        data.append("facility", this.state.facility)
        data.append("feature", this.state.feature)
        data.append("image", this.state.image)
        data.append("status", this.state.status)
        data.append("images", this.state.images)
        data.append("apartmentId", this.state.apartmentId)

        axios.post("https://api.ismyroom.com/units", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("berhasil menambahkan data")
            }else {
                alert("gagal menambahkan data")
            }
        })
    }

    handelHarga = () => {
        this.setState({showSewa: true})
    }

    handleHargaOff = () => {
        this.setState({showSewa: false})
    }

    handleSample = () => {
        alert("Berhasil Menambahkan Data")
    }

    render(){
        const label = this.state.images? this.state.images.name : 'Klik atau drop gambar yang akan dimasukan disini';
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <Header/>
                    <div className="section">
                        <h1>Tambah Unit Baru</h1>
                        <p>Halaman ini untuk menambahkan unit baru yang akan disewakan</p>
                        <div className="form-wrapper w-form">
                                <input className="field w-input" name="idapart" placeholder="Apartment Id" required="required" type="text" onChange={(e) => this.setState({apartmentId: e.target.value})} />
                                <input className="field w-input" name="nama" placeholder="Nama Unit" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="kode" placeholder="Kode Unit" required="required" type="text" onChange={(e) => this.setState({unitCode: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})} />
                                <input className="field w-input" name="feature" placeholder="Kelengkapan Unit" required="required" type="text" onChange={(e) => this.setState({feature: e.target.value})} />
                                <div className="lokasi-menu-list">
                                    <label htmlFor="status">Layanan</label>
                                    <div className="margin-radio">
                                    <input type="radio" value="sewa" defaultChecked name="status" className="radio-menu-lokasi" onClick={this.handelHarga} /><div className="title-radio-lokasi">Disewakan</div>
                                    </div>
                                    <div className="margin-radio">
                                    <input type="radio" value="jual" name="status" className="radio-menu-lokasi" onClick={this.handleHargaOff} /><div className="title-radio-lokasi">Dijual</div>
                                    </div>
                                </div>
                                {
                                    this.state.showSewa? 
                                    <>
                                        <label htmlFor="harga">Notes : Kosongkan Apabila Harga Tidak Tersedia Di Bulan Tertentu</label>
                                        <input className="field first w-input" name="harga1" placeholder="Harga 1 Bulan" required="required" type="text" />
                                        <input className="field mid w-input" name="harga2" placeholder="Harga 6 Bulan" required="required" type="text" />
                                        <input className="field last w-input" name="harga3" placeholder="Harga 12 Bulan" required="required" type="text" /> 
                                    </> 
                                    :  
                                    <input className="field  w-input" name="harga2" placeholder="Harga Jual" required="required" type="text" />
                                }
                                <div className="lokasi-menu-list">
                                    <label htmlFor="status">Status Unit</label>
                                    <div className="margin-radio">
                                    <input type="radio" value="tersedia" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Tersedia</div>
                                    </div>
                                    <div className="margin-radio">
                                    <input type="radio" value="tersewa" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Tersewa</div>
                                    </div>
                                </div>
                                
                                {/* <UploadImg/> */}
                                <div>
                                    <StyledDropZone onDrop={this.setFile} onChange={(e) => this.setState({images: e.target.value})}>{label}</StyledDropZone>
                                </div>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.value})} />
                                </div>
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required"></textarea>
                                <input className="button w-button" type="submit" value="Tambah Unit" onClick={this.handleSample} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}