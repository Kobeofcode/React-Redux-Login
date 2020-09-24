import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "../src/components/Navbar";
import Login from "./pages/Login";
import store from "./store";
import Register from "./pages/Register";
import Home from "./pages/Home";


const App = ()=>{
    
    
    return(
       <Provider store={store}>
        <BrowserRouter>
            < Navbar/>
            < Route exact path="/" component={Login}></Route>
            < Route path="/register" component={Register}></Route>
            < Route path="/home" component={Home}></Route>
        </BrowserRouter>
       </Provider> 
    )
}


export default App;