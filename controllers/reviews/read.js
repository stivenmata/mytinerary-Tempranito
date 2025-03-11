import { request } from "express";
import Review from "../../models/Review.js";




let allReview = async (req,res,next)=>{
    try {
let all =  await Review.find()
return res.status(200).json({
    response: all
})
    } catch (error) {
     return res.status(500).json({
         response: error
     })
    }
}

export default allReview