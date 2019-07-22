import { REGISTER, REG_SUCCESS, REG_FAIL ,CHANGE_INPUT} from "../ActionTypes/signupAt";

export function register(firstname,lastname,email,password){
    return({type:REGISTER,firstname,lastname,email,password});
}
export function regSuccess(users){
    return({type:REG_SUCCESS},users);
}
export function regFail(error){
    return({type:REG_FAIL},error);
}
export function changeInput(fieldName, fieldValue) {
    return { type: CHANGE_INPUT, fieldName, fieldValue };
  }