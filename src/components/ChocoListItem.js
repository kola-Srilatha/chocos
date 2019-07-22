import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../Header";
import NavBar from "./NavBar";

function ChocoListItem(props){
    
    return(
        <>
        
            

        <div>
        <NavBar/>
            <Header/>
        
            { 
                
                <Link to={`/chocolates/${props.id}`}><h1>{props.name}</h1><img src={props.image}/></Link>
                
                
            
            }

        </div>
        </>
    );
}
ChocoListItem.propTypes={
    name:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
};
export default ChocoListItem;
