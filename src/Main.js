import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
// import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import AddApart from "./Container/Apartemen/AddApart";
import Home from "./Container/Home";
import Location from "./Container/Location";
import DetailUnit from "./Container/Unit/DetailUnit";
import AddUnit from "./Container/Unit/AddUnit";
import DetailApart from "./Container/Apartemen/DetailApart";
import Unit from "./Container/Unit/Unit";
import ListSewa from "./Container/Apartemen/ListSewa";
import ListJual from "./Container/Apartemen/ListJual";
import Login from "./Container/Login";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                {/* <DynamicScrollToTop/> */}
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/listsewa" component={ListSewa}/>
                    <Route path="/listjual" component={ListJual}/>
                    <Route path="/addapart" component={AddApart}/>
                    <Route path="/detailapart/:idApart" component={DetailApart}/>
                    <Route path="/location" component={Location}/>
                    <Route path="/unit/:idApart" component={Unit}/>
                    <Route path="/detailunit" component={DetailUnit}/>
                    <Route path="/addunit" component={AddUnit}/>
            </HashRouter>
        )
    }
}

export default Main;