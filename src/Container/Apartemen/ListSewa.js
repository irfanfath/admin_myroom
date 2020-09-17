import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
 
class ListSewa extends Component {
    state = {
        post: []
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
        axios.delete(`https://cooperative-express.herokuapp.com/apartments/${id}`)
        .then((result)=>{
            this.getPostApi()
        }) 
    }

    handleMoveListUnit = (id) => {
        window.open(`#/unit/${id}`, "_blank")
    } 

    handleMoveDetail = (id) => {
        window.open(`#/detailapart/${id}`, "_blank")
    } 

    handleMoveEdit = (id) => {
        window.open(`#/editapart/${id}`, "_blank")
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
                    <div className="article w-clearfix w-inline-block" key={key} onClick={() => this.handleMoveDetail(data.id)}>
                        <div className="image-wrapper"><img className="thumbnail" src={data.image} alt="" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title">{data.name}s</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.&nbsp;</p>
                            <div className="article-info-wrapper">
                                {/* <div className="article-info-text tag" onClick={() => this.handleMoveListUnit(data.id)}>List Unit</div>
                                <div className="article-info-text tag" onClick={() => this.handleMoveEdit(data.id)}>Edit Apartemen</div>
                                <div className="article-info-text tag" onClick={() => this.handleRemove(data.id)}>Hapus Apartemen</div> */}
                                <input className="button-edit w-button" type="submit" value="List Unit" onClick={() => this.handleMoveListUnit(data.id)}/>
                            </div>
                            {/* <input className="button w-button" type="submit" value="List Unit" onClick={() => this.handleMoveListUnit(data.id)}/>
                            <input className="button-edit w-button" type="submit" value="Edit Data" onClick={() => this.handleMoveEdit(data.id)}/>
                            <input className="button-hapus w-button" type="submit" value="Hapus Apartemen" onClick={() => this.handleRemove(data.id)}/> */}
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