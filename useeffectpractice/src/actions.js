import {ADD_NEW_USER,REMOVE_USER} from "./types";

export const setUser=(user)=>{
    return{
    type:ADD_NEW_USER,
    payload:user

}}

export const removeUser=()=>{
    return{
        type:REMOVE_USER
    }
}