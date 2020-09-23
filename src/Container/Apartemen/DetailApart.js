import React, { Component } from "react";
import axios from "axios";

export default class DetailApart extends Component {
    state = {
        post: [],
    }

    componentDidMount(){
        let id = this.props.match.params.idApart
        axios.get(`https://api.ismyroom.com/apartments/${id}`)
        .then((result)=>{
            this.setState({
                post: result.data,
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
                        </div>
                        <div className="author-column w-col w-col-4">
                            <div className="images">
                                <img
                                    className="big-image"
                                    sizes="(max-width: 767px) 96vw, (max-width: 991px) 478.65625px, 619.984375px"
                                    alt=""
                                    src={this.state.post.image}
                                />
                                <div className="image-text">{this.state.post.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}