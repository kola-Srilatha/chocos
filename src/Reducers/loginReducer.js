import produce from "immer";
import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL, CHANGE_INPUT } from "../ActionTypes/loginAt";
const initialState = { email: "", password: "", isLoading: false,isLoginsuccess:false};
 function loginReducer(prevstate = initialState, action){
    return produce(prevstate, draft => {
      switch (action.type) {
        //changeInput
        case CHANGE_INPUT:
          draft[action.fieldName] = action.fieldValue;
          break;
        //login
        case GET_LOGIN:
         // draft.isLoading = true;
          break;
        case GET_LOGIN_SUCCESS:
          draft.isLoading = true;
            draft.users=action.users;
            draft.isLoginsuccess=true;
          break;
        case GET_LOGIN_FAIL:
          draft.isLoading = false;
          draft.isLoginsuccess=false;
          break;
        
       }
    });
  }
export default loginReducer;
   
//   case LOGOUT:
        //     draft.isLoading=true;
        //     break;
  