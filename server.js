const express = require("express");
const mongojs = require("mongojs");
const db = mongojs("eddi",["Redux"]);

const app = express();
app.use(express.json());

app.post("/newuser",(req,res)=>{
    let data = req.body;
    db.Redux.insert({name:data.userName,password:data.password});
    res.send("Radi do sada");
})



app.post("/login",(req,res)=>{
    let incoming = req.body;
    db.Redux.find({"name":incoming.userName,"password":incoming.password},(err,data)=>{
        if(data.length == 1){
            res.send(
                {
                    name:data[0].name,
                    token:data[0]._id
                }
            )
        }
    })
    
})

app.listen(9000, ()=>{
    console.log("Listening to port 9000")
});