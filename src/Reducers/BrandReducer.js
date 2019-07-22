import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,GET_BRAND_DETAILS,GET_BRAND_DETAILS_SUCCESS
} from "../ActionTypes/ChocoAt";
import produce from "immer";
const initialState={brands:[],BrandDetails:[],isLoading:false};
const  brandReducer = (prevstate=initialState,action)=>{


return produce(prevstate,draft=>{
switch(action.type){
  case GET_BRANDS:
    draft.isLoading=true;
    break;
  case GET_BRAND_DETAILS:
     draft.isLoading=true;
     break;
  case GET_BRANDS_SUCCESS:
    draft.brands=action.brands;
    break;
  case GET_BRANDS_FAIL:
    draft.isLoading=false;
    break;
  
  case GET_BRAND_DETAILS_SUCCESS:
     draft.BrandDetails= action.BrandDetails
     break; 
}
});
};



export default brandReducer
