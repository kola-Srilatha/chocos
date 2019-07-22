import React,{Component} from "react";
import { getBrandDetailsAC } from "../ActionCreators/ChocoAc";
import {connect} from "react-redux";
import NavBar from "./NavBar";
import Header from "../Header";

class BrandDetails extends Component{
    componentDidMount(){
        this.props.dispatch(getBrandDetailsAC(this.props.match.params.id));
    }
    render(){
        return(
            <>
            <div>
                <NavBar/>
                <Header/>
            </div>
            <div>
               <img src={this.props.brandsdetails.logo}/>
               <h1>{this.props.brandsdetails.name}</h1>
               <h1>{this.props.brandsdetails.desc}</h1>
            </div>
            </>
        );
    }
}
function mapStateToProps(appState) {
    return {
        brandsdetails: appState.brandReducer.BrandDetails
     
    };
  }
  
  export default connect(mapStateToProps)(BrandDetails);
  