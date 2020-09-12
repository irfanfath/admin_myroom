import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
 
class Unit extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        this.setState({
            filtered: this.state.post
        });
        let id = this.props.match.params.idApart
        axios.get(`https://cooperative-express.herokuapp.com/units/`)
        .then((res) =>{
            const arrData = res.data
            for (let i = 0; i < arrData.length; i++) {
                if(arrData[i].ApartmentId === parseInt(id)){
                    this.setState({post: [...this.state.post, arrData[i]]})
                }
            }
        })
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                {
                    this.state.post.map((data, key)=>
                    <div className="article w-clearfix w-inline-block" key={key}>
                        <div className="image-wrapper"><img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" alt="" width="109" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title">{data.name}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.&nbsp;</p>
                            <div className="article-info-wrapper">
                                <div className="article-info-text">March 2, 2014</div>
                                <div className="article-info-text tag">Camera</div>
                                <div className="article-info-text tag">Nature</div>
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
 
export default Unit;