import { request } from "express";
import Category from "../../models/Category.js";




let allCategory = async (req,res,next)=>{
    try {
let all =  await Category.find()
return res.status(200).json({
    response: all
})
    } catch (error) {
     return res.status(500).json({
         response: error
     })
    }
}

export default allCategory