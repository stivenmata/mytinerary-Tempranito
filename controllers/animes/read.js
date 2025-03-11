import { request } from "express";
import Anime from "../../models/Anime.js";




let allAnime = async (req,res,next)=>{
    try {
let all =  await Anime.find()
return res.status(200).json({
    response: all
})
    } catch (error) {
     return res.status(500).json({
         response: error
     })
    }
}

export default allAnime