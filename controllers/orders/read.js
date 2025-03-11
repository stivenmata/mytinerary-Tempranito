import { request } from "express";
import Order from "../../models/Order.js";




let allOrder = async (req,res,next)=>{
    try {
let all =  await Order.find()
return res.status(200).json({
    response: all
})
    } catch (error) {
     return res.status(500).json({
         response: error
     })
    }
}

export default allOrder