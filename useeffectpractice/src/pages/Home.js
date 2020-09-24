import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Service from "../components/service";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

const Home = () => {
  const dispatch = useDispatch(); 
  const history = useHistory();
  const userStore = useSelector(store => store.userStore);
  useEffect(()=>{
    if(Service.loggedData() === null){
      history.push("/")
    }
    if(userStore){
      dispatch(setUser(Service.loggedData()))
    }
  },[])
    
  const Logout = ()=>{
    Service.Logout(history)
  }
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Home</h1>
        <p className="lead">
          Welcome {userStore.name}
        </p>
        <button className="btn btn-warning" onClick={Logout}>Log Out</button>
      </div>
    </div>
  )
};

export default Home;