import React, { Component } from "react";
import Sidebar from "../Component/Navigation/Sidebar";
import axios from "axios"

export default class Login extends Component{
    state = {
        username: "",
        password: "",
        // showLoader: false,
        failLogin: false
    }

    handlePostLogin = (username, password) => {
        // this.setState({
        //   showLoader: true
        // })
        const data = {
          "username" : username,
          "password": password
        }
        axios.post('https://api.ismyroom.com/users/login', data)
        .then((res) => {
            console.log(res)
          if(res.data.message === "Login success"){
              localStorage.setItem("token", res.data.access_token)
              // localStorage.setItem("nameUser", res.data.data.firstName)
              localStorage.setItem('session', "active");
              this.setState({token: res.data.access_token})
              this.props.history.push("/home")
          }else{
            alert("username atau password anda salah")
          }
        }).catch((err) => {
            console.log(err)
            alert("username atau password anda salah")
        });      
    }

    handleMove = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            <div className="all-content w-clearfix">
                <Sidebar/>
                <div className="content main-column">
                    <div className="section">
                        <h1>Login</h1>
                        <p>Silahkan Login Terlebih Dahulu</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input first" name="username" placeholder="Username" required="required" type="text" onChange={(e) => this.setState({username: e.target.value})} />
                                <input className="field w-input last" name="password" placeholder="Password" required="required" type="password" onChange={(e) => this.setState({password: e.target.value})} />
                                <input className="button w-button" type="submit" value="Login" onClick={() => this.handlePostLogin(this.state.username, this.state.password)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}