import React, { Component } from 'react';
import Dropzone from "../../Component/Dropzone/Dropzone"

export default class AddImage extends Component {
    render(){
        return(
            <div>
                <p className="title">React Drag and Drop Image Upload</p>
                <div className="content">
                    <Dropzone />
                </div>
            </div>
        )
    }
}