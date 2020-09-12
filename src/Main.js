import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import AddApart from "./Container/Apartemen/AddApart";
import Home from "./Container/Home";
import Location from "./Container/Location";
import DetailUnit from "./Container/Unit/DetailUnit";
import DetailApart from "./Container/Apartemen/DetailApart";
import Unit from "./Container/Unit/Unit";
import ListSewa from "./Container/Apartemen/ListSewa";
import ListJual from "./Container/Apartemen/ListJual";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listsewa" component={ListSewa}/>
                    <Route path="/listjual" component={ListJual}/>
                    <Route path="/addapart" component={AddApart}/>
                    <Route path="/detailapart/:idApart" component={DetailApart}/>
                    <Route path="/location" component={Location}/>
                    <Route path="/unit/:idApart" component={Unit}/>
                    <Route path="/detailunit" component={DetailUnit}/>
            </HashRouter>
        )
    }
}

export default Main;