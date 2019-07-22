import { put } from "redux-saga/effects";
import { loginSuccess} from "../ActionCreators/loginAc";
export function* getLogin(action) {
  try {

    let logRes = yield fetch(`http://localhost:4000/users?email=${action.email}&password=${action.password}`);
    let users= yield logRes.json();
    if(users.length){
        yield put(loginSuccess(users));   
    }
   else{
       throw("please enter valid users");
   }
    } catch (err) {
        alert(err);
  }
}


    