import { put } from "redux-saga/effects";
import {regSuccess, regFail}from"../ActionCreators/signupAc";
export function *getsignUP(action) {
  try {
      console.log(action)
      alert("post");
      let postData={
          firstName:action.firstname,
          lastName:action.lastname,
          email:action.email,
          password:action.password
      }

    let regRes = yield fetch(`http://localhost:4000/users`,{
      method:"POST",
      body:JSON.stringify(postData),
      headers:{
          "Content-Type":"application/json"
      }  
    });

  
    let postUsers= yield regRes.json();
    console.log(postUsers)
        yield put(regSuccess(postUsers));   
    } catch (err) {
        yield put(regFail(err));
  }
}

