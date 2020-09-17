import React, { Component } from "react";
import axios from "axios";

export default class DetailApart extends Component {
    state = {
        post: [],
        postLoc: []
    }

    componentDidMount(){
        let id = this.props.match.params.idApart
        axios.get(`https://api.ismyroom.com/apartments/${id}`)
        .then((result)=>{
            this.setState({
                post: result.data,
                postLoc : result.data.location
            })
        }) 
    }

    handleRemove = (id) => {
        axios.delete(`https://api.ismyroom.com/apartments/${id}`)
        .then((result)=>{
            this.getPostApi()
        }) 
    }

    handleMoveEdit = (id) => {
        window.open(`#/editapart/${id}`, "_blank")
    }

    render(){
        return(
            <div className="content-section">
                <div className="w-container">
                    <div className="w-row">
                        <div className="article-body-column w-col w-col-8">
                            <h1 className="article-heading">{this.state.post.name}</h1>
                            <h2>Deskripsi</h2>
                            <p>
                                {this.state.post.description}
                            </p>
                            <h2>Fasilitas</h2>
                            <p>
                                {this.state.post.facility}
                            </p>
                            {/* <h2>List Image</h2>
                            <div className="images">
                                <img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" width="109" alt="" />
                                <img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3209473df7f296b0005bb_thumb14.jpg" width="109" alt="" />
                                <img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320a273df7f296b0005be_thumb10.jpg" width="109" alt="" />
                                <img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320c9ba5496e141000730_thumb3.jpg" width="109" alt="" />
                                <img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320dcba5496e141000734_thumb7.jpg" width="109" alt="" />
                                <div className="image-text">Here's some text about this photo.</div>
                            </div>
                            <div className="images">
                                <img
                                    className="big-image"
                                    sizes="(max-width: 767px) 96vw, (max-width: 991px) 478.65625px, 619.984375px"
                                    src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep.jpg"
                                    srcSet="
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep-p-500x375.jpeg    500w,
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep-p-800x600.jpeg    800w,
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep-p-1080x810.jpeg  1080w,
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep-p-1600x1200.jpeg 1600w,
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep-p-2000x1500.jpeg 2000w,
                                        http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f3d14073df7f296b000feb_jeep.jpg              2048w
                                    "
                                />
                                <div className="image-text">Here's some text about this photo.</div>
                            </div> */}
                        </div>
                        <div className="author-column w-col w-col-4">
                            <div className="images">
                                <img
                                    className="big-image"
                                    sizes="(max-width: 767px) 96vw, (max-width: 991px) 478.65625px, 619.984375px"
                                    alt=""
                                    src={this.state.post.image}
                                />
                                <div className="image-text">{this.state.postLoc.name}</div>
                            </div>
                            <div className="button-action-detail">
                                <input className="button w-button" type="submit" value="Edit" onClick={() => this.handleMoveEdit(this.state.post.id)} />
                            </div>
                            <div className="button-action-detail">
                                <input className="button w-button" type="submit" value="Hapus" onClick={() => this.handleRemove(this.state.post.id)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}