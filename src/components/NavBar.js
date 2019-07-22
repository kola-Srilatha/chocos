import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Navb.css";
import { tsPropertySignature } from "@babel/types";
import { connect } from "react-redux";
import { changeInput } from "../ActionCreators/loginAc";

function NavBar(props){

  const handleChange = name => e => {
    props.dispatch(changeInput(name, e.target.value)); 
  }
    return(
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      
      <ul className="nav navbar-nav">
        <li> 
    <NavLink to="/brands" activeStyle={{color:"blue",backgroundColor:"pink"}} exact>BRANDS</NavLink></li>
        <li>
    <NavLink to="/chocolates" activeStyle={{color:"blue",backgroundColor:"pink"}}exact>CHOCOLATES</NavLink></li>
    <li>
    <NavLink to="/login" activeStyle={{color:"blue",backgroundColor:"pink"}}exact>logout</NavLink></li>
      </ul>
      <Link to={`/chocolates`}><input type="text"placeholder="search" onChange={handleChange("search")} /></Link>
    <input type="button"name="search"value="search"/>
 
    </div>
  </nav>
    
    )
}

function mapStateToProps(state){
  return {
     search : state.loginReducer.search,
     chocolates : state.chocosReducer.chocolates
  }
}

export default connect(mapStateToProps)(NavBar);