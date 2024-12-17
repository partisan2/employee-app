import express from "express";
import mysql from "mysql";
import cors from "cors";
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use(cors());

const db =  mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

db.connect((err)=>{
    if(!err){
        console.log("db connect")
    }else{
        console.log("db connection failed")
    }
})

app.listen(5000,()=>{
    console.log("Server Running");
})