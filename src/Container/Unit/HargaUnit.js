import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../../Component/Navigation/Sidebar";
import Header from "../../Component/Navigation/Header";

export default class HargaUnit extends Component{
    constructor(props){
        super()
            this.state = {
                //rent
                unitId: localStorage.getItem('idharga'),
                periode: "",
                price: "",
                discount: 10,
            }
    }

    handlePostRent = () => {
        const payload = {
            "unitId" : this.state.unitId,
            "period" : this.state.period,
            "price" : this.state.price,
            "discount" : this.state.discount
        }
        const data = payload
        axios.post("https://api.ismyroom.com/rents", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("Berhasil menambahkan data")
            }else {
                alert("Gagal menambahkan data")
            }
        })
    }

    render(){
        return(
            <div className="all-content w-clearfix">
            <Sidebar/>
            <div className="content main-column">
                <Header/>
                <div className="section">
                    <h1>Input Harga Unit Baru</h1>
                    <p>Halaman ini untuk menambahkan harga unit baru yang akan disewakan</p>
                    <label htmlFor="harga">Notes : Apabila Harga Tersedia Di Beberapa Periode, Input satu persatu</label>
                    <input className="field first w-input" name="periode" placeholder="Periode" required="required" type="text" onChange={(e) => this.setState({period: e.target.value})} />
                    <input className="field mid w-input" name="harga" placeholder="Harga" required="required" type="text" onChange={(e) => this.setState({price: e.target.value})} /> 
                    <button className="button w-button" onClick={this.handlePostRent} >Submit</button>
                </div>
            </div>
        </div>
        )
    }
}