import React,{ useState } from "react";
import Service from "../components/service";
import { useHistory } from "react-router-dom";


const Register = ()=>{
    const history = useHistory();
    const [state,setState]=useState({userName:"", password:""})
    let insertUser = ()=>{
        Service.registerNewUser(state)
        .then(res=>{
            history.push("/")
        })
    }
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">
                    Register
                </h1>
                <div className="container">
                    <ul><input onChange={(event)=>{setState({...state,userName:event.target.value})}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" placeholder="Username"/></ul>
                    <ul><input onChange={(event)=>{setState({...state,password:event.target.value})}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="text" placeholder="Password"/></ul>
                </div>
                <p className="lead"><button className="btn btn-primary" onClick={insertUser}>Register</button></p>
            </div>
        </div>
    )
}

export default Register;