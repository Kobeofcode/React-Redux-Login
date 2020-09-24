import {createStore,combineReducers}from "redux";
import { userReducer }from "./reducer";

export const store = combineReducers({
    userStore:userReducer
})

export default createStore(store);