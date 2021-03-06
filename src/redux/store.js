import {createStore,applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./root-reducer";


const middleWare = [reduxThunk];

if(process.env.NODE_ENV ==='development' ){
    middleWare.push(logger);
}
const store = createStore(rootReducer,applyMiddleware(...middleWare));
export default store;