import express from "express"
import "dotenv/config.js"
import "./config/database.js"

const server = express()

const PORT = process.env.PORT || 5000

const ready = ()=> console.log("Server ready in port:"+PORT);

server.get("/",(request,response)=>{
    response.send("Hola Bienvenidos a express")
})
server.get("/hola",(request,response)=>{
    response.send("Chao")
})

server.listen(PORT,ready)
    
