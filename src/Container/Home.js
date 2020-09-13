import React, { Component } from "react";
import Sidebar from "../Component/Navigation/Sidebar";
import Header from "../Component/Navigation/Header";
import guide from "../Component/guide.pdf";
import axios from "axios";
 
class Home extends Component {
    
    handleGetAPI = () => {
        axios.get("https://cooperative-express.herokuapp.com/apartments")
        .then((result)=>{
            this.setState({
                post: result.data
            })
        }) 
    }

    componentDidMount(){
        const session = localStorage.getItem('session')
        if (session !== "active"){
            this.props.history.push("/")
        } else (
            this.handleGetAPI()
        )
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <div className="section">
                    <h1>Selamat Datang,</h1>
                    <p>We started Proof to commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p>
                        Then we decided that it was varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                        lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <a href = {guide} rel="noopener noreferrer" target = "_blank">Lihat Panduan Pengguna</a>
                </div>
            </div>
        </div>
    );
  }
}
 
export default Home;