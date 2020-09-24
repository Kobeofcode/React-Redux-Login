import {ADD_NEW_USER,REMOVE_USER}from "./types";

export const userReducer=(state={},action)=>{
    switch(action.type){
        case ADD_NEW_USER:
            return {...state,...action.payload}
        case REMOVE_USER:
            return {}

        default: return state;
    }
}