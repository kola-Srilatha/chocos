import React, { Component } from "react";
import { connect } from "react-redux";
import { getChocos } from "../ActionCreators/ChocoAc";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "../Header";

class ChocoList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.dispatch(getChocos());
  }
render() {
  if(this.props.search && this.props.search.length>0){
        let choco = this.props.chocolates.filter( c => {
          return c.name.toLowerCase().includes(this.props.search)
        });
        if(!choco.length){
          return(
          <div>
            <NavBar/>
            <Header/>
          
           <h1>No result found</h1> 
          </div>
          );
        }
        return (
          
          <div>
            <NavBar/>
            <Header/>
          
      
            {choco.map(c => (
              <div key={c.id}>
                {c.name}
                <Link to={`/chocolates/${c.id}`} ><img src={c.image} /></Link>
              </div>
            ))}
  </div>
        
        );
      }
    return (
      <>
      <div><NavBar/>
            <Header/>
          </div>

      
        {this.props.chocolates.map(c => (
          <div key={c.id}>
          
          {c.name}
          
         <Link to={`/chocolates/${c.id}`}><img src={c.image}/></Link>
        
        </div>
        ))}
      </>
    );
  }
}
function mapStateToProps(appState) {
 console.log(appState);
  return {
    chocolates:appState.chocosReducer.chocolates,
    search:appState.loginReducer.search  
  };
}
  
export default connect(mapStateToProps)(ChocoList);






{/* id={c.id} */}
{/* {c.desc} */}
{/* handleChocolate= {this.handleChocoDetails} */}