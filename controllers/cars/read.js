import { request } from "express";
import Car from "../../models/Car.js";




let allCar = async (req,res,next)=>{
    try {
let all =  await Car.find()
return res.status(200).json({
    response: all
})
    } catch (error) {
     return res.status(500).json({
         response: error
     })
    }
}

export default allCar