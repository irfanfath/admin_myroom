import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    name: ""
  };

  toggleChangeMJ = () => {
    this.setState(prevState => ({
      name: !prevState.isMJ,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (var key in this.state) {
      if(this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
    //   check: arr.toString() 
        "name": this.state.name
    };
    axios.post("https://api.ismyroom.com/locations", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            if(res.status === 201){
                alert("berhasil menambahkan data")
            }else {
                alert("gagal menambahkan data")
            }
        })
  }

  render() {
    return (
      <div className="container">
        <h2>Save the multiple checkbox values in React js</h2>
        <hr />
        <form onSubmit = {this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.name}
                onChange={this.toggleChangeMJ}
                className="form-check-input"
              />
              MJ
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isJB}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              JB
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDrake}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Drake
            </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;