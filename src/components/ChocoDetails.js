import React,{Component} from "react";
import { getChocoDetailsAC } from "../ActionCreators/ChocoAc";
import {connect} from "react-redux";
import NavBar from "./NavBar";
import Header from "../Header";

class  ChocoDetails extends Component{
    
    componentDidMount(){
    
        this.props.dispatch(getChocoDetailsAC(this.props.match.params.id));
    }
    render(){

        return(
            <>
            <div>
                <NavBar/>
                <Header/>
            </div>
            <div>
                <img src={this.props.chocosdetails.image}/>
                <h1>{this.props.chocosdetails.name}</h1> 
                <h2>{this.props.chocosdetails.desc}</h2>
           </div>
           </>
        );
    }
}
function mapStateToProps(appState) {
    return {
        chocosdetails: appState.chocosReducer.ChocoDetails
     
    };
  }
  
  export default connect(mapStateToProps)(ChocoDetails);
  