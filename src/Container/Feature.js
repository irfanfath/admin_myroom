import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
 
class Feature extends Component {
    constructor(props){
        super(props)
            this.state = {
                post: [],
                name: ""
            }
    }

    componentDidMount(){
        this.getPostApi()
    }

    getPostApi = () => {
        axios.get("https://cooperative-express.herokuapp.com/features")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    handleSubmit = () => {
        // const data = new FormData()
        const payload = {
            "name" : this.state.name
        }
        const data = payload
        // data.append("name", this.state.name)
        axios.post("https://cooperative-express.herokuapp.com/features", data, {
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
        axios.delete(`https://cooperative-express.herokuapp.com/features/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((result)=>{
            if(result.status === 200){
                alert("berhasil menghapus data")
            }else {
                alert("gagal menghapus data")
            }
            this.getPostApi()
        }) 
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <div className="section">
                    <div className="form-wrapper w-form">
                        <div>
                            <input className="field w-input" name="feature" placeholder="Nama Kelengkapan Unit Baru" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                            <input className="button w-button" type="submit" value="Tambah Kelengkapan Unit" onClick={this.handleSubmit} />
                        </div>
                    </div>
                    <h2>List Kelengkapan Unit</h2>
                </div>
                {
                    this.state.post.map((data, key)=>
                    <div className="location w-clearfix w-inline-block" key={key}>
                        <section className="article-text-wrapper w-clearfix">
                            <h4 className="thumbnail-title">{data.name}</h4>
                            <div className="article-info-delete tag"  onClick={() => this.handleRemove(data.id)}>Hapus Kelengkapan Unit</div>
                        </section>
                    </div>
                    )
                }
            </div>
        </div>
    );
  }
}
 
export default Feature;