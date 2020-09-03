import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Home from "./Container/Home";
import AddDataSewa from "./Component/AddDataSewa";
import AddDataJual from "./Component/AddDataJual"
import ListData from "./Component/ListData";
import ListDataJual from "./Component/ListDataJual";
import ListDataTitip from "./Component/ListDataTitip";
import EditData from "./Component/EditData";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/datasewa" component={ListData}/>
                    <Route path="/datajual" component={ListDataJual}/>
                    <Route path="/adddatasewa" component={AddDataSewa}/>
                    <Route path="/adddatajual" component={AddDataJual}/>
                    <Route path="/datatitip" component={ListDataTitip}/>
                    <Route path="/edit" component={EditData}/>
            </HashRouter>
        )
    }
}

export default Main;