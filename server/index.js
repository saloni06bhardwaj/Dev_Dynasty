import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.json({
        mssg:"Jai Shri Ram!!"
    });
})

app.listen(3000,()=>{
    console.log("Server is UP!!")
})