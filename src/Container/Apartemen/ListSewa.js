import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
 
class ListSewa extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        axios.get("https://cooperative-express.herokuapp.com/apartments")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    handleMoveListUnit = (id) => {
        window.open(`#/unit/${id}`, "_blank")
    } 

    handleMoveDetail = (id) => {
        window.open(`#/detailapart/${id}`, "_blank")
    } 

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                {
                    this.state.post.map((data, key)=>
                    <div className="article w-clearfix w-inline-block" key={key} onClick={() => this.handleMoveDetail(data.id)}>
                        <div className="image-wrapper"><img className="thumbnail" src={data.image} alt="" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title">{data.name}s</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.&nbsp;</p>
                            <input className="button w-button" type="submit" value="List Unit" onClick={() => this.handleMoveListUnit(data.id)}/>
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