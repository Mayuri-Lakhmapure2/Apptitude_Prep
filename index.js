
const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/ap/:username",(req,res)=>{
    const examData = require("./data.json");
    let {username} = req.params;
    let data = examData[username];
    console.log(data);
    if(data){
        res.render("test.ejs",{data});
    }else {
        res.render("error.ejs",{data});
    }
    
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
 


