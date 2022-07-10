
const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
require('dotenv').config()
app.use(express.json())

const registerController=require("./controllers/Auth.controller")

app.use("/api/auth",registerController)




module.exports=app
