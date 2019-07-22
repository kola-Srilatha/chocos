import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL, LOGOUT, CHANGE_INPUT,  } from "../ActionTypes/loginAt";

//login
export function login(email, password){
    return{type:GET_LOGIN, email, password};
}
export function loginSuccess(users){
    return{type:GET_LOGIN_SUCCESS,users};
}
export function loginFail(error)
{
    return{type:GET_LOGIN_FAIL,error};
}

export function logout(){
    return{type:LOGOUT}
}
export function changeInput(fieldName, fieldValue) {
    return { type: CHANGE_INPUT, fieldName, fieldValue };
  }