import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
 
class Location extends Component {
    constructor(props){
        super(props)

        this.state = {
            post: [],
            name: ""
        }
    }

    componentDidMount(){
        axios.get("https://cooperative-express.herokuapp.com/locations")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    handleSubmit = () => {
        const data = new FormData()

        data.append("name", this.state.name)

        axios.post("https://cooperative-express.herokuapp.com/locations", data, {
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
                            <input className="field w-input" name="lokasi" placeholder="Nama Lokasi Baru" required="required" type="text" onChange={(e) => this.setState({name: e.target.value})} />
                            <input className="button w-button" type="submit" value="Tambah Lokasi" onClick={this.handleSubmit} />
                        </div>
                    </div>
                    <h2>List Lokasi</h2>
                </div>
                {
                    this.state.post.map((data, key)=>
                    <div className="location w-clearfix w-inline-block" key={key}>
                        <section className="article-text-wrapper w-clearfix">
                            <h4 className="thumbnail-title">{data.name}</h4>
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