import { Router } from "express";
import orderController from "../controllers/orders/read.js";

const routerOrders = Router();

routerOrders.get("/allOrders", orderController)

export default routerOrders;