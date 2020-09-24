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
                images: null,
                showHarga: false,

                //sell
                unitId: "",
                price: "",
                discount: 10
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
                alert("Silahkan masukan harga")
                this.setState({showHarga: true})
            }else {
                alert("Gagal menambahkan data")
            }
        })
    }

    handlePostSell = () => {
        const payload = {
            "unitId" : this.state.unitId,
            "price" : this.state.price,
            "discount" : this.state.discount
        }
        const data = payload
        axios.post("https://api.ismyroom.com/sells", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("Berhasil menambahkan data")
            }else {
                alert("Gagal menambahkan data")
            }
        })
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
                                {/* <input className="field w-input" name="idapart" placeholder="Apartment Id" required="required" type="text" onChange={(e) => this.setState({apartmentId: e.target.value})} /> */}
                                <input className="field w-input" name="nama" placeholder="Nama Unit" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                                <input className="field w-input" name="kode" placeholder="Kode Unit" required="required" type="text" onChange={(e) => this.setState({unitCode: e.target.value})} />
                                <input className="field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" onChange={(e) => this.setState({facility: e.target.value})} />
                                <input className="field w-input" name="feature" placeholder="Kelengkapan Unit" required="required" type="text" onChange={(e) => this.setState({feature: e.target.value})} />
                                {/* <input className="field w-input" name="status" placeholder="Status Unit" required="required" type="text" onChange={(e) => this.setState({status: e.target.value})} /> */}
                                <div className="lokasi-menu-list">
                                    <label htmlFor="status">Status Unit</label>
                                    <div className="margin-radio">
                                    <input type="radio" value="available" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Tersedia</div>
                                    </div>
                                    <div className="margin-radio">
                                    <input type="radio" value="available" name="status" className="radio-menu-lokasi" onChange={(e) => this.setState({status: e.target.value})} /><div className="title-radio-lokasi">Tersewa</div>
                                    </div>
                                </div>
                                <div>
                                    <StyledDropZone onDrop={this.setFile} onChange={(e) => this.setState({images: e.target.files[0]})}>{label}</StyledDropZone>
                                </div>
                                <div className="lokasi-menu-list">
                                    <label htmlFor="mainimage">Gambar Utama</label>
                                    <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})}/>
                                </div>
                                <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                <input className="button w-button" type="submit" value="Selanjutnya" onClick={this.handleSubmit} />
                                <div className="lokasi-menu-list">
                                    <input className="field  w-input" name="unitid" placeholder="Unit Id" required="required" type="text" onChange={(e) => this.setState({unitId: e.target.value})} />
                                    <input className="field  w-input" name="harga" placeholder="Harga Jual" required="required" type="text" onChange={(e) => this.setState({price: e.target.value})}/>
                                    <button className="button w-button" onClick={this.handlePostSell} >Submit</button>  
                                </div>
                                  
                                {/* {
                                    this.state.showHarga? 
                                    <>
                                        <input className="field  w-input" name="unitid" placeholder="Unit Id" required="required" type="text" onChange={(e) => this.setState({unitId: e.target.value})} />
                                        <input className="field  w-input" name="harga" placeholder="Harga Jual" required="required" type="text" onChange={(e) => this.setState({price: e.target.value})}/>
                                        <button className="button w-button" onClick={this.handlePostSell} >Submit</button>            
                                    </>
                                    : null
                                } */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}