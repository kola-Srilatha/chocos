import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function BrandListItem(props){
    
    return(
        <div>
            
            
            { 
                
                <Link to={`/brands/${props.id}`}><img src={props.logo}/></Link>
                
                
            }
            

        </div>
    );
}
BrandListItem.propTypes={
    name:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
};
export default BrandListItem;
