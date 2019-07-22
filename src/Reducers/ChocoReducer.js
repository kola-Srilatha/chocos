import {
    GET_CHOCOS,
    GET_CHOCOS_SUCCESS,
    GET_CHOCOS_FAIL,
    GET_CHOCO_DETAILS,
    GET_CHOCO_DETAILS_SUCCESS
  } from "../ActionTypes/ChocoAt";
  import produce from "immer";
  const initialState = { search:"",chocolates: [], ChocoDetails : [], isLoading: false };
  export default function chocosReducer(prevstate = initialState, action){
    return produce(prevstate, draft => {
      switch (action.type) {
        case GET_CHOCOS:
          draft.isLoading = true;
          break;
          case GET_CHOCO_DETAILS:
            draft.isLoading=true;
            break;
            
        case GET_CHOCOS_SUCCESS:
        
          draft.chocolates = action.chocolates;
          break;
        case GET_CHOCOS_FAIL:
          draft.isLoading = false;
          break;
        case GET_CHOCO_DETAILS_SUCCESS:
          draft.ChocoDetails= action.ChocoDetails
        break; 
          
      }
    });
  };
  
  

