import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
 
class ListTestimoni extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("https://api.ismyroom.com/testimonials")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    handleMoveAdd = () => {
        this.props.history.push("/testimoni")
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <input className="button w-button" type="submit" value="Tambah Testimonials" onClick={this.handleMoveAdd} />
                {
                    this.state.post.map((data, key)=>
                    <div className="article w-clearfix w-inline-block" key={key}>
                        <div className="image-wrapper"><img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" alt="" width="109" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title">{data.name}</h2>
                            <p>{data.testimonial}&nbsp;</p>
                            <div className="article-info-wrapper">
                                <div className="article-info-text tag">Edit</div>
                                <div className="article-info-text tag">Hapus</div>
                            </div>
                        </section>
                    </div>
                    )
                }
            </div>
        </div>
    );
  }
}
 
export default ListTestimoni;