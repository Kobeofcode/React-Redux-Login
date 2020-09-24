import axios from "axios";
import { removeUser } from "../actions";


class Service {
  
    static contactServer= (body)=>{
        return axios.post("/login",body)
        
    }
    static registerNewUser =(body)=>{
        return axios.post("/newuser",body)
    }
    static Logout =(history)=>{
        localStorage.removeItem("app_user_data")
        removeUser()
        history.push("/")
    }
    static storeUserLocally = (user_data)=>{
        localStorage.setItem("app_user_data",JSON.stringify(user_data))
    }
    static loggedData = ()=>{
        let data = localStorage.getItem("app_user_data")
        return data ? JSON.parse(data) : null;
    }
}



export default Service;