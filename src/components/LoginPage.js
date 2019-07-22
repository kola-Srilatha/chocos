import React,{ Component } from "react";
import { login, changeInput } from "../ActionCreators/loginAc";
import {Link,Redirect} from "react-router-dom";
import{connect} from 'react-redux';
import "../App.css"
import Header from "../Header";

class LoginPage extends Component{
 handleChange = name => e => {
   this.props.dispatch(changeInput(name, e.target.value));
  };

  handling= e =>{
        e.preventDefault();
        this.props.dispatch(login(
            this.props.email,
            this.props.password));
    }
   
  render(){
    return(
      <div>
       {this.props.isloginsuccess &&  <Redirect to="/home"></Redirect>}
           <div>
           <Header/>     
           <form onSubmit={this.handling}>
            Email address: 
            <input  className="inputtxt"
                type="email" 
                name="email"
                onChange={this.handleChange("email")} 
                placeholder="enter email"/>
                <br/>
            Password: 
            <input  className="inputtxt"
                type="password"
                name="password"
                onChange={this.handleChange("password")} 
                placeholder="password" required/>
                <br/>
            <button className="inputsub">login</button>
            {/* <button type = "button"><Link to ="/home"/>Login</button> */}
            
            </form>
            <h6>Dont have an account?.<Link to="/SignUp">Create One</Link></h6>
            {/* <button className="logout"><Link to="./LoginPage"/>logout</button> */}
               
        </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) =>{
    return{
    email:state.loginReducer.email,
    password:state.loginReducer.password,
    isloginsuccess:state.loginReducer.isLoginsuccess
    
    }
}

export default connect(mapStateToProps)(LoginPage);
