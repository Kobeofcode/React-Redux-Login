import React from "react";
import { useState }from "react";
import { useHistory } from "react-router-dom"
import { setUser } from "../actions";
import { useDispatch } from "react-redux";
import Service from "../components/service";
import "../App.css"


const Login = () => {
    
    const[state,setState]= useState({  userName : "" , password : "" })
    const history = useHistory();
    const dispatch = useDispatch();  
    const onLogin = ()=>{
        Service.contactServer(state)
        .then(res=>{
            Service.storeUserLocally(res.data);
            dispatch(setUser(res.data));
            history.push("/home");
        })
        
    }
    


    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">
                    Login
                </h1>
                <div className="container">
                    <ul><input  onChange={(event)=>{setState({ ...state, userName:event.target.value})}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" placeholder="Username"/></ul>
                    <ul><input  onChange={(event)=>{setState({ ...state, password:event.target.value})}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" placeholder="Password"/></ul>
                    <button className="btn btn-success" onClick={onLogin}>Login</button>
                    <button className="btn btn-danger" id="loginfailed" >Login Failed</button>
                </div>
                <p className="lead"></p>
            </div>
        </div>
    )
}


export default Login;