import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
 
class Location extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("https://cooperative-express.herokuapp.com/locations")
        .then((result)=>{
            this.setState({
                post: result.data
            })
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
                        <form data-name="Suggest" name="wf-form-suggest">
                            <input className="field w-input" name="lokasi" placeholder="Nama Lokasi Baru" required="required" type="text" />
                            <input className="button w-button" type="submit" value="Tambah Lokasi" />
                        </form>
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