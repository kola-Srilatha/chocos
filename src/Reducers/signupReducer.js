import produce from "immer";
import { CHANGE_INPUT, REGISTER, REG_SUCCESS, REG_FAIL } from "../ActionTypes/signupAt";
const initialState = { firstname:"",lastname:"",email: "", password: "", isLoading: false };
 function signupReducer(prevstate = initialState, action){
    return produce(prevstate, draft => {
      switch (action.type) {
        //changeInput
        case CHANGE_INPUT:
          draft[action.fieldName] = action.fieldValue;
          break;
        //login
        case REGISTER:
          draft.isLoading = true;
          break;
        case REG_SUCCESS:
          draft.isLoading = true;
          draft.users=action.users;
         
          break;
        case REG_FAIL:
          draft.isLoading = false;
          break;
        
       }
    });
  }
export default signupReducer;
   