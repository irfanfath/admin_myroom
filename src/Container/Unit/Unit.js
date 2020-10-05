import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
import { MDBTabContent, MDBTabPane } from "mdbreact";
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

class Unit extends Component {
    state = {
        post: [],
        postSell: [],
        activeItem: "1",
        sewaActive: true,
        showEdit: false,

        //update unit
        apartmentId: localStorage.getItem('apart'),
        unitCode: "",
        name: "",
        description: "",
        facility: "",
        feature: "",
        image: null,
        status: "",
        images: null,
    }
    
    setFile = (images) => {
        this.setState({ images })
    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };

    componentDidMount(){
        const session = localStorage.getItem('session')
        if (session !== "active"){
            this.props.history.push("/login")
        } else (
            this.handlGetRent()
        )
        this.setState({
            filtered: this.state.post
        });
        
        // let id = this.props.match.params.idApart
        // axios.get(`https://api.ismyroom.com/units?filter=rent`)
        // .then((res) =>{
        //     const arrData = res.data
        //     for (let i = 0; i < arrData.length; i++) {
        //         if(arrData[i].apartmentId === parseInt(id)){
        //             this.setState({post: [...this.state.post, arrData[i]]})
        //         }
        //     }
        //     // localStorage.setItem('apart', this.state.post[0].apartmentId);
        // })
        this.handlGetSell()
    }

    handlGetRent = () => {
        let id = this.props.match.params.idApart
          axios.get(`https://api.ismyroom.com/apartments/${id}?filter=rent`)
          .then((res) =>{
            res.data.units.forEach(element => {
                console.log(element.rents)
                if(element.rents.length > 0){
                    this.setState({post: [...this.state.post, element]})
                }
            });
          })
    }

    handlGetSell = () => {
        let id = this.props.match.params.idApart
          axios.get(`https://api.ismyroom.com/apartments/${id}?filter=sell`)
          .then((res) =>{
            res.data.units.forEach(element => {
                console.log(element.sells)
                if(element.sells.length > 0){
                    this.setState({postSell: [...this.state.postSell, element]})
                }
            });
          })
    }

    handleUpdate = (id) => {
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

        axios.patch(`https://api.ismyroom.com/units/${id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 200){
                alert("berhasil memperbarui data")
            }else {
                alert("gagal memperbarui data")
            }
            this.handlGetRent()
        })
    }

    handleRemoveRent = (id) => {
        axios.delete(`https://api.ismyroom.com/units/${id}`, {
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
        }) 
        this.handlGetRent()
    }

    handleMoveAdd = () => {
        this.props.history.push("/addunit")
    }

    handleMoveAddJual = () => {
        this.props.history.push("/addunitjual")
    }

    handleMoveEdit = () => {
        this.setState({showEdit: true})
    }

    handleCloseEdit = () => {
        this.setState({showEdit: false})
    }

    handleDetail = (id) => {
        this.props.history.push(`/detailunit/${id}`)
    }

    handleDetailJual = (id) => {
        this.props.history.push(`/detailunitjual/${id}`)
    }

  render() {
    const label = this.state.images? this.state.images.name : 'Klik atau drop gambar yang akan dimasukan disini';
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                            <MDBTabContent className="apartemen-list" activeItem={this.state.activeItem}>
                                <div className="pilih-layanan-unit">
                                    <div onClick={this.toggle("1")} role="tab" className="w-dyn-item"><div className={this.state.sewaActive? "button-unit-layanan-aktif w-button": "button-unit-layanan w-button"} onClick={()=> this.setState({sewaActive: true})}>Sewa</div></div>
                                    <div onClick={this.toggle("2")} role="tab" className="w-dyn-item"><div className={this.state.sewaActive? "button-unit-layanan w-button": "button-unit-layanan-aktif w-button"} onClick={()=> this.setState({sewaActive: false})}>Jual</div></div>
                                </div>
                                <MDBTabPane className="products-list-wrapper w-dyn-list" tabId="1" role="tabpanel">
                                <input className="button w-button" type="submit" value="Tambah Unit Disewa" onClick={this.handleMoveAdd} />
                                {
                                    this.state.post.map((data, key)=>
                                    <div className="article w-clearfix w-inline-block" key={key}>
                                        <div className="image-wrapper"><img className="thumbnail" src={data.image} alt="" width="109" /></div>
                                            <section className="article-text-wrapper w-clearfix">
                                                <h2 className="arrow">❯</h2>
                                                <h2 className="thumbnail-title" onClick={() => this.handleDetail(data.id)}>{data.name}</h2>
                                                <p>{data.description}</p>
                                                <p>Fasilitas : {data.facility}</p>
                                                <p>Kelengkapan Unit : {data.feature}</p>
                                                <p>Status : {data.status}</p>
                                                <div className="article-info-wrapper">
                                                    <div className="article-info-text">{data.unitCode}</div>
                                                    <div className="article-info-text tag" onClick={this.handleMoveEdit} >Edit Unit</div>
                                                    <div className="article-info-text tag" onClick={() => this.handleDetail(data.id)}>Edit Harga</div>
                                                    <div className="article-info-text tag" onClick={() => this.handleRemoveRent(data.id)}>Hapus</div>
                                                </div>
                                                {
                                                    this.state.showEdit? <div className="section">
                                                        <div className="close-edit" onClick={this.handleCloseEdit}>x</div>
                                                                <div className="section">
                                                                    <h1>Edit Unit</h1>
                                                                    <p>Halaman ini untuk merubah unit</p>
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
                                                                            <input className="button w-button" type="submit" value="Update Data" onClick={() => this.handleUpdate(data.id)} />
                                                                    </div>
                                                                </div>
                                                        </div> 
                                                    : null
                                                }
                                            </section>
                                        </div>
                                    )
                                }
                                </MDBTabPane>
                                <MDBTabPane className="products-list-wrapper w-dyn-list" tabId="2" role="tabpanel">
                                <input className="button w-button" type="submit" value="Tambah Unit Dijual" onClick={this.handleMoveAddJual} />
                                {
                                    this.state.postSell.map((data, key)=>
                                    <div className="article w-clearfix w-inline-block" key={key}>
                                        <div className="image-wrapper"><img className="thumbnail" src={data.image} alt="" width="109" /></div>
                                        <section className="article-text-wrapper w-clearfix">
                                            <h2 className="arrow">❯</h2>
                                            <h2 className="thumbnail-title" onClick={() => this.handleDetailJual(data.id)}>{data.name}</h2>
                                            <p>{data.description}</p>
                                            <p>Fasilitas : {data.facility}</p>
                                            <p>Kelengkapan Unit : {data.feature}</p>
                                            <p>Status : {data.status}</p>
                                            <div className="article-info-wrapper">
                                                <div className="article-info-text">{data.unitCode}</div>
                                                <div className="article-info-text tag" onClick={this.handleMoveEdit}>Edit Unit</div>
                                                <div className="article-info-text tag" onClick={() => this.handleDetailJual(data.id)}>Edit Harga</div>
                                                <div className="article-info-text tag" onClick={() => this.handleRemoveRent(data.id)}>Hapus</div>
                                            </div>
                                            {
                                                this.state.showEdit? <div className="section">
                                                    <div className="close-edit" onClick={this.handleCloseEdit}>x</div>
                                                            <div className="section">
                                                                <h1>Edit Unit</h1>
                                                                <p>Halaman ini untuk merubah unit</p>
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
                                                                        <div>
                                                                            <StyledDropZone onDrop={this.setFile} onChange={(e) => this.setState({images: e.target.files[0]})}>{label}</StyledDropZone>
                                                                        </div>
                                                                        <div className="lokasi-menu-list">
                                                                            <label htmlFor="mainimage">Gambar Utama</label>
                                                                            <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})}/>
                                                                        </div>
                                                                        <textarea className="big field w-input" name="deskripsi" placeholder="Deskripsi" required="required" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                                                        <input className="button w-button" type="submit" value="Update Data" onClick={() => this.handleUpdate(data.id)} />
                                                                </div>
                                                            </div>
                                                    </div> 
                                                : null
                                            }
                                        </section>
                                    </div>
                                    )
                                }
                                </MDBTabPane>
                            </MDBTabContent>
            </div>
        </div>
    );
  }
}
 
export default Unit;