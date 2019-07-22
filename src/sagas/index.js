import { takeLatest, all } from "redux-saga/effects";
import {getChocosList, getChocoDetailsAC} from "./ChocoSagas";
import { GET_CHOCOS, GET_BRANDS, GET_CHOCO_DETAILS, GET_BRAND_DETAILS } from "../ActionTypes/ChocoAt";
import {getBrandsList, getBrandDetailsAC } from "./BrandSagas";
import { GET_LOGIN } from "../ActionTypes/loginAt";
import { getLogin } from "./loginsaga";
// import { register } from "../ActionCreators/signupAc";
import { REGISTER } from "../ActionTypes/signupAt";
import { getsignUP } from "./signupSaga";

function* rootSaga(){

  yield all([
    takeLatest(GET_CHOCOS,getChocosList),
    takeLatest(GET_BRANDS,getBrandsList),
    takeLatest(GET_CHOCO_DETAILS, getChocoDetailsAC),
    takeLatest(GET_BRAND_DETAILS,getBrandDetailsAC),
    takeLatest(GET_LOGIN,getLogin),
    takeLatest(REGISTER,getsignUP)
  ]);

}
export default rootSaga;
