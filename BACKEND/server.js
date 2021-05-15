import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import cards from "./models/dbCards.js";


// app congig

const app=express();
const port=process.env.PORT || 8001;

// MIddlewares

app.use(express.json());
app.use(cors());

// DB config

const connectionUrl="mongodb+srv://admin:admin@cluster0.5aqhb.mongodb.net/turuLuvdb?retryWrites=true&w=majority";
mongoose.connect(connectionUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
mongoose.connection.once("open",()=>console.log("Db connected"))

// API Endpoints

app.get("/",(req,res)=>{
    res.status(200).send("Hello world");
    

})

app.post("/api/tinderCards",(req,res)=>{
    const dbCard=req.body
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status("201").send(data)
        }
    })
});

app.get("/api/tinderCards",(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status("200").send(data);
        }
    })
})


// lister

app.listen(port,()=>console.log(`listening on port: ${port}`));

