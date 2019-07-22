import {put} from "redux-saga/effects";
import {getBrandsSuccess, getBrandsFail, getBrandDetailsSuccess } from "../ActionCreators/ChocoAc";

export function* getBrandsList(){
    try{
        let brandRes=yield fetch("http://localhost:4000/brands");
        let brand=yield brandRes.json();
        yield put(getBrandsSuccess(brand));
    }
    catch(err){
        yield put(getBrandsFail(err));
    }
}
export function* getBrandDetailsAC(action){
    try {
      let branddetailsRes = yield fetch(`http://localhost:4000/brands/${action.id}`);
      let branddetails = yield branddetailsRes.json();
      yield put(getBrandDetailsSuccess(branddetails));
    } catch (err) {
       yield put(getBrandsFail(err));
    }
  }
  
  