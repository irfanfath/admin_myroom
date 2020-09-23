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
import EditApart from "./Container/Apartemen/EditApart";
import Facility from "./Container/Facility";
import Feature from "./Container/Feature";
import Profile from "./Container/Profile";
import Testimoni from "./Container/Testimoni";
import ListTestimoni from "./Container/ListTestimoni";
import Loc from "./Container/Loc";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                {/* <DynamicScrollToTop/> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/listtestimoni" component={ListTestimoni}/>
                    <Route path="/testimoni" component={Testimoni}/>
                    <Route path="/listsewa" component={ListSewa}/>
                    <Route path="/listjual" component={ListJual}/>
                    <Route path="/addapart" component={AddApart}/>
                    <Route path="/editapart/:idApart" component={EditApart}/>
                    <Route path="/detailapart/:idApart" component={DetailApart}/>
                    <Route path="/location" component={Location}/>
                    <Route path="/facility" component={Facility}/>
                    <Route path="/feature" component={Feature}/>
                    <Route path="/unit/:idApart" component={Unit}/>
                    <Route path="/detailunit" component={DetailUnit}/>
                    <Route path="/addunit" component={AddUnit}/>
                    <Route path="/loc" component={Loc}/>
            </HashRouter>
        )
    }
}

export default Main;