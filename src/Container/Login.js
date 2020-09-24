import React, { Component } from "react";
import axios from "axios"

export default class Login extends Component{
    state = {
        username: "",
        password: "",
        showLoader: false,
    }

    componentDidMount(){
        const session = localStorage.getItem('session')
        if (session !== "active"){
            alert("Silahkan Login Terlebih Dahulu")
        } else (
            this.props.history.push("/")
        )
    }

    handlePostLogin = (username, password) => {
        this.setState({
          showLoader: true
        })
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
              this.props.history.push("/")
          }else{
            alert("username atau password anda salah")
            this.setState({showLoader: false})
          }
        }).catch((err) => {
            console.log(err)
            alert("username atau password anda salah")
            this.setState({showLoader: false})
        });      
    }

    LoaderModal = () => {
        return (
            <div id="posisi-loader">
              <div className="title-loader">Please Wait...</div>
            </div>
        )
      }

    render(){
        return(
            <div className="all-content w-clearfix">
                <header className="header main-column">
                    <h1 className="logo">IsMyRoom</h1>
                </header>
                <div className="content main-column">
                    <div className="section">
                        <h1>Login</h1>
                        <p>Silahkan Login Terlebih Dahulu</p>
                        <div className="form-wrapper w-form">
                            <div>
                                <input className="field w-input first" name="username" placeholder="Username" required="required" type="text" onChange={(e) => this.setState({username: e.target.value})} />
                                <input className="field w-input mid" name="password" placeholder="Password" required="required" type="password" onChange={(e) => this.setState({password: e.target.value})} />
                                <input className="button w-button" type="submit" value="Login" onClick={() => this.handlePostLogin(this.state.username, this.state.password)} />
                                {
                                    this.state.showLoader ? <this.LoaderModal /> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}