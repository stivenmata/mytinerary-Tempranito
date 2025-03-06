import express from "express"
import "dotenv/config.js"

const server = express()

const PORT = process.env.PORT || 5000

const ready = ()=> console.log("Server ready in port:"+PORT);

server.get("/",(request,response)=>{
    response.send("Hola Bienvenidos a express")
})

server.listen(PORT,ready)
    
