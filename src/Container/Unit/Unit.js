import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";
import { MDBTabContent, MDBTabPane } from "mdbreact";
 
class Unit extends Component {
    state = {
        post: [],
        postSell: [],
        activeItem: "1",
        sewaActive: true
    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };

    componentDidMount(){
        this.setState({
            filtered: this.state.post
        });
        // let id = this.props.match.params.idApart
        // axios.get(`https://api.ismyroom.com/units?filter=rent`)
        // .then((res) =>{
        //     const arrData = res.data
        //     for (let i = 0; i < arrData.length; i++) {
        //         if(arrData[i].apartmentId === parseInt(id)){
        //             this.setState({post: [...this.state.post, arrData[i]]})
        //         }
        //     }
        //     // localStorage.setItem('apart', this.state.post[0].apartmentId);
        // })
        let id = this.props.match.params.idApart
          axios.get(`https://api.ismyroom.com/apartments/${id}?filter=rent`)
          .then((res) =>{
            console.log("LIST PRODUCT Sewa :", res)
            res.data.units.forEach(element => {
                console.log(element.rents)
                if(element.rents.length > 0){
                    this.setState({post: [...this.state.post, element]})
                }
            });
          })
          this.handlGetSell()
    }

    handlGetSell = () => {
        let id = this.props.match.params.idApart
          axios.get(`https://api.ismyroom.com/apartments/${id}?filter=sell`)
          .then((res) =>{
            console.log("LIST PRODUCT Sewa :", res)
            res.data.units.forEach(element => {
                console.log(element.sells)
                if(element.sells.length > 0){
                    this.setState({postSell: [...this.state.postSell, element]})
                }
            });
          })
    }

    handleMoveAdd = () => {
        this.props.history.push("/addunit")
    }

    handleMoveAddJual = () => {
        this.props.history.push("/addunitjual")
    }

    handleDetail = () => {
        this.props.history.push("/detailunit")
    }

  render() {
    return (
        <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                {/* <input className="button w-button" type="submit" value="Tambah Unit Disewa" onClick={this.handleMoveAdd} />
                <input className="button-edit w-button" type="submit" value="Tambah Unit Dijual" onClick={this.handleMoveAddJual} /> */}
                {/* <div className="pilih-layanan-unit">
                    <button className="button-unit-layanan-aktif w-button">Sewa</button>
                    <button className="button-unit-layanan w-button">Jual</button>
                </div> */}
                            <MDBTabContent className="apartemen-list" activeItem={this.state.activeItem}>
                                <div className="pilih-layanan-unit">
                                    <div onClick={this.toggle("1")} role="tab" className="w-dyn-item"><div className={this.state.sewaActive? "button-unit-layanan-aktif w-button": "button-unit-layanan w-button"} onClick={()=> this.setState({sewaActive: true})}>Sewa</div></div>
                                    <div onClick={this.toggle("2")} role="tab" className="w-dyn-item"><div className={this.state.sewaActive? "button-unit-layanan w-button": "button-unit-layanan-aktif w-button"} onClick={()=> this.setState({sewaActive: false})}>Jual</div></div>
                                </div>
                                <MDBTabPane className="products-list-wrapper w-dyn-list" tabId="1" role="tabpanel">
                                <input className="button w-button" type="submit" value="Tambah Unit Disewa" onClick={this.handleMoveAdd} />
                                {
                                    this.state.post.map((data, key)=>
                                    <div className="article w-clearfix w-inline-block" key={key} onClick={() => this.handleDetail(data.id)}>
                                        <div className="image-wrapper"><img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" alt="" width="109" /></div>
                                        <section className="article-text-wrapper w-clearfix">
                                            <h2 className="arrow">❯</h2>
                                            <h2 className="thumbnail-title">{data.name}</h2>
                                            <p>{data.description}</p>
                                            <p>Fasilitas : {data.facility}</p>
                                            <p>Kelengkapan Unit : {data.feature}</p>
                                            <p>Status : {data.status}</p>
                                            <div className="article-info-wrapper">
                                                <div className="article-info-text">{data.unitCode}</div>
                                                <div className="article-info-text tag">Edit</div>
                                                <div className="article-info-text tag">Hapus</div>
                                            </div>
                                        </section>
                                    </div>
                                    )
                                }
                                </MDBTabPane>
                                <MDBTabPane className="products-list-wrapper w-dyn-list" tabId="2" role="tabpanel">
                                <input className="button w-button" type="submit" value="Tambah Unit Dijual" onClick={this.handleMoveAddJual} />
                                {
                                    this.state.postSell.map((data, key)=>
                                    <div className="article w-clearfix w-inline-block" key={key} onClick={() => this.handleDetail(data.id)}>
                                        <div className="image-wrapper"><img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" alt="" width="109" /></div>
                                        <section className="article-text-wrapper w-clearfix">
                                            <h2 className="arrow">❯</h2>
                                            <h2 className="thumbnail-title">{data.name}</h2>
                                            <p>{data.description}</p>
                                            <p>Fasilitas : {data.facility}</p>
                                            <p>Kelengkapan Unit : {data.feature}</p>
                                            <p>Status : {data.status}</p>
                                            <div className="article-info-wrapper">
                                                <div className="article-info-text">{data.unitCode}</div>
                                                <div className="article-info-text tag">Edit</div>
                                                <div className="article-info-text tag">Hapus</div>
                                            </div>
                                        </section>
                                    </div>
                                    )
                                }
                                </MDBTabPane>
                            </MDBTabContent>



                {/* {
                    this.state.post.map((data, key)=>
                    <div className="article w-clearfix w-inline-block" key={key} onClick={() => this.handleDetail(data.id)}>
                        <div className="image-wrapper"><img className="thumbnail" src="http://uploads.webflow.com/52f2c8085d8eed2b6b000300/52f320b1593f6edf41000793_thumb11.jpg" alt="" width="109" /></div>
                        <section className="article-text-wrapper w-clearfix">
                            <h2 className="arrow">❯</h2>
                            <h2 className="thumbnail-title">{data.name}</h2>
                            <p>{data.description}</p>
                            <p>Fasilitas : {data.facility}</p>
                            <p>Kelengkapan Unit : {data.feature}</p>
                            <p>Status : {data.status}</p>
                            <div className="article-info-wrapper">
                                <div className="article-info-text">{data.unitCode}</div>
                                <div className="article-info-text tag">Edit</div>
                                <div className="article-info-text tag">Hapus</div>
                            </div>
                        </section>
                    </div>
                    )
                } */}
            </div>
        </div>
    );
  }
}
 
export default Unit;