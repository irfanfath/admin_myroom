import React, { Component } from "react";
import axios from "axios";
import Header from "../../Component/Navigation/Header";

export default class DetailUnitJual extends Component {
    state = {
        post: [],
        postRent: [],
        postImage: [],
        unitId: "",
        price: "",
        discount: 10,
        showEdit: false
    }

    componentDidMount(){
        this.handleGetUnits()
    }

    handleGetUnits = () => {
        let id = this.props.match.params.idUnitJual
        axios.get(`https://api.ismyroom.com/units/${id}`)
        .then((result)=>{
            this.setState({
                post: result.data,
                postRent : result.data.sells,
                postImage : result.data.unitImages
            })
            console.log(result.data)
        }) 
    }

    handlePostRent = () => {
        const payload = {
            "unitId" : this.state.post.id,
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
                this.props.history.push('/')
            }else {
                alert("Gagal menambahkan data")
            }
        })
    }

    handleUpdate = (id) => {
        const payload = {
            "unitId" : this.state.post.id,
            "price" : this.state.price,
            "discount" : this.state.discount
        }
        const data = payload
        axios.patch(`https://api.ismyroom.com/sells/${id}`, data, {
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
            this.handleGetUnits()
        })
    }

    handleRemove = (id) => {
        axios.delete(`https://api.ismyroom.com/sells/${id}`, {
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
            this.handleGetUnits()
        }) 
    }

    handleshowEdit = () => {
        this.setState({showEdit: true})
    }

    handleCloseEdit = () => {
        this.setState({showEdit: false})
    }

    render(){
        return(
            <>
            <Header/>
            <div className="content-section">
                <div className="w-container">
                    <div className="w-row">
                        <div className="article-body-column w-col w-col-8">
                            <h1 className="article-heading">{this.state.post.name}</h1>
                            <h2>Deskripsi</h2><p>{this.state.post.description}</p>
                            <h2>Fasilitas</h2><p>{this.state.post.facility}</p>
                            <h2>Kelengkapan Unit</h2><p>{this.state.post.feature}</p>
                            <h2>List Image</h2>
                            <div className="images">
                                {
                                    this.state.postImage.map((data,key)=>
                                        <img className="thumbnail" src={data.image} width="200" alt="" key={key} />
                                    )
                                }
                            </div>
                            <h2>Harga</h2>
                            <div className="article-info-text tag" onClick={this.handleshowEdit}>Tambah Harga</div>
                            {
                                            this.state.showEdit? 
                                            <div className="section">
                                                <div className="close-edit" onClick={this.handleCloseEdit}>x</div>
                                                <h1>Tambah Harga Unit Baru</h1>
                                                <input className="field mid w-input" name="harga" placeholder="Harga" required="required" type="text" onChange={(e) => this.setState({price: e.target.value})} /> 
                                                <button className="button w-button" onClick={this.handlePostRent}>Update Data</button>
                                            </div>
                                            : null
                                        }
                            <br/>
                            <br/>
                            {
                                this.state.postRent.map((data,key)=>
                                <div className="title" key={key}>
                                    <h4>Harga : {data.price} &nbsp;
                                        <div className="article-info-text tag" onClick={this.handleshowEdit}>Edit Harga</div>
                                        <div className="article-info-text tag"  onClick={() => this.handleRemove(data.id)}>Hapus Harga</div>
                                        {
                                            this.state.showEdit? 
                                            <div className="section">
                                                <h4 className="close-edit" onClick={this.handleCloseEdit}>x</h4>
                                                <h1>Edit Harga Unit Baru</h1>
                                                <input className="field mid w-input" name="harga" placeholder="Harga" required="required" type="text" onChange={(e) => this.setState({price: e.target.value})} /> 
                                                <button className="button w-button" onClick={() => this.handleUpdate(data.id)}>Update Data</button>
                                            </div>
                                            : null
                                        }
                                    </h4>
                                </div>
                                )
                            }
                        </div>
                        <div className="author-column w-col w-col-4">
                        <div className="images">
                                <img
                                    className="big-image"
                                    sizes="(max-width: 767px) 96vw, (max-width: 991px) 478.65625px, 619.984375px"
                                    src={this.state.post.image}
                                    alt=""
                                />
                                <div className="image-text">{this.state.post.unitCode}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}