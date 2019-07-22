import { createStore, applyMiddleware ,combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from "../Reducers";
import logger from "redux-saga";



const sagaMiddleware = createSagaMiddleware();

  
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export default store;

