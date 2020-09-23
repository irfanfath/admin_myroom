import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
 
class ListSewa extends Component {
    state = {
        post: [],
        name: "",
        description: "",
        facility: "",
        image: null,
        location: "",
        showEdit: false
    }

    getPostApi = () => {
        axios.get("https://api.ismyroom.com/apartments")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    componentDidMount(){
        this.getPostApi()
    }

    handleRemove = (id) => {
        axios.delete(`https://api.ismyroom.com/apartments/${id}`, {
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

    handleUpdate = (id) => {
        // const data = JSON.stringify ({
        //     "name" : this.state.name,
        //     "description" : this.state.description,
        //     "facility": this.state.facility,
        //     "location": this.state.location,
        //     "image": this.state.image
        // })
        // axios.patch(`https://api.ismyroom.com/apartments/${id}`, data, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("token")}`,
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     }
        // }).then((res) => {
        //     console.log(res)
        //     if(res.status === 200){
        //         alert("berhasil memperbarui data")
        //     }else {
        //         alert("gagal memperbarui data")
        //     }
        //     this.getPostApi()
        // })
        const data = new FormData()

        data.append("name", this.state.name)
        data.append("description", this.state.description)
        data.append("facility", this.state.facility)
        data.append("location", this.state.location)
        data.append("image", this.state.image)

        axios.patch(`https://api.ismyroom.com/apartments/${id}`, data, {
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
            this.getPostApi()
        })
    }

    handleMoveListUnit = (id) => {
        window.open(`#/unit/${id}`, "_blank")
    } 

    handleMoveDetail = (id) => {
        window.open(`#/detailapart/${id}`, "_blank")
    } 

    handleMoveEdit = () => {
        this.setState({showEdit: true})
    }

    handleCloseEdit = () => {
        this.setState({showEdit: false})
    }

    handleMoveAdd = () => {
        this.props.history.push("/addapart")
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <input className="button w-button" type="submit" value="Tambah Apartemen Baru" onClick={this.handleMoveAdd} />
                {
                    this.state.post.map((data, key)=>
                    <div className="article w-clearfix w-inline-block" key={key}>
                        <div className="image-wrapper"><img className="thumbnail" src={data.image} alt="" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title" onClick={() => this.handleMoveDetail(data.id)}>{data.name}</h2>
                            <p>{data.description}&nbsp;</p>
                            <div className="article-info-wrapper">
                                <div className="article-info-text tag" onClick={() => this.handleMoveListUnit(data.id)}>List Unit</div>
                                {/* <div className="article-info-text tag" onClick={() => this.handleMoveEdit(data.id)}>Edit Apartemen</div> */}
                                <div className="article-info-text tag" onClick={this.handleMoveEdit}>Edit Apartemen</div>
                                <div className="article-info-text tag" onClick={() => this.handleRemove(data.id)}>Hapus Apartemen</div>
                                {/* <input className="button-edit w-button" type="submit" value="List Unit" onClick={() => this.handleMoveListUnit(data.id)}/> */}
                            </div>
                            {
                                this.state.showEdit? <div className="section">
                                    <div className="close-edit" onClick={this.handleCloseEdit}>x</div>
                                <h1>Edit Apartemen</h1>
                                <p>Halaman ini untuk merubah data apartemen</p>
                                <div className="form-wrapper w-form">
                                    <div>
                                        <input className="field w-input" name="nama" placeholder="Nama Apartemen" required="required" type="text" defaultValue={data.name} onChange={(e) => this.setState({name: e.target.value})} />
                                        <textarea className="big field w-input" name="facility" placeholder="Fasilitas" required="required" type="text" defaultValue={data.facility} onChange={(e) => this.setState({facility: e.target.value})}/>
                                        <input className="field w-input" name="lokasi" placeholder="Lokasi" required="required" type="text" defaultValue={data.location} onChange={(e) => this.setState({location: e.target.value})}/>
                                        <div className="lokasi-menu-list">
                                            <label htmlFor="mainimage">Gambar Utama</label>
                                            <input className="field w-input" name="image" required="required" type="file" onChange={(e) => this.setState({image: e.target.files[0]})} />
                                        </div>
                                        <textarea className="big field w-input" name="description" placeholder="Deskripsi" required="required" defaultValue={data.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                                        <input className="button w-button" type="submit" value="Edit Apartemen" onClick={() => this.handleUpdate(data.id)} />
                                    </div>
                                </div>
                            </div> : null
                            }
                        </section>
                    </div>
                    )
                }
            </div>
        </div>
    );
  }
}
 
export default ListSewa;