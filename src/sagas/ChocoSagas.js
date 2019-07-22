import { put } from "redux-saga/effects";
import { getSuccess, getFail, getChocoDetailsSuccess } from "../ActionCreators/ChocoAc";
export function* getChocosList() {
  try {
    let chocRes = yield fetch("http://localhost:4000/chocolates");
    let choco = yield chocRes.json();
    yield put(getSuccess(choco));
  } catch (err) {
    yield put(getFail(err));
  }
}

export function* getChocoDetailsAC(action) {
  try {
    let chocdetailsRes = yield fetch(`http://localhost:4000/chocolates/${action.id}`);
    let chocodetails = yield chocdetailsRes.json();
    yield put(getChocoDetailsSuccess(chocodetails));
  } catch (err) {
     yield put(getFail(err));
  }
}


    