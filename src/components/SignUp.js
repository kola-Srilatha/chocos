import React, { Component} from "react";
import { register, changeInput } from "../ActionCreators/signupAc";
import {Link} from "react-router-dom";
import {connect}from "react-redux";
import Header from "../Header";


class SignUp extends Component {
    handleChange = name => e => {
        this.props.dispatch(changeInput(name, e.target.value));
       };
     
       handling= e =>{
             e.preventDefault();
             this.props.dispatch(register(
                 this.props.firstname,
                 this.props.lastname,
                 this.props.email,
                 this.props.password));
         }
     
     render(){
         return(
             <div>
                 <Header/>
             <form className="container">
                 First Name: 
                 <input 
                     type="text" 
                     name="firstname"
                     onChange={this.handleChange("firstname")} 
                     placeholder="enter firstname" required/>
                     <br/>
                     Last Name: 
                 <input 
                     type="text" 
                     name="lastname"
                     onChange={this.handleChange("lastname")} 
                     placeholder="enter lastname" required/>
                     <br/>
                 Email address: 
                 <input 
                     type="email" 
                     name="email"
                     onChange={this.handleChange("email")} 
                     placeholder="enter email" pattern=".+@gmail.com" required/>
                     <br/>
                 Password: 
                 <input 
                     type="password"
                     name="password"
                     onChange={this.handleChange("password")} 
                     placeholder="password" required/>
                     <br/>
                 <button type = "Submit"onClick={this.handling}>register</button>
                 Do you want?.<Link to="/login"><a>Login</a></Link>
                  
             </form>
             </div>
         );
       }
     }
     
     const mapStateToProps = (state) =>{
         return{
         firstname:state.signupReducer.firstname,
         lastname:state.signupReducer.lastname,
         email:state.signupReducer.email,
         password:state.signupReducer.password,
         
         }
     }
     
     export default connect(mapStateToProps)(SignUp);
     