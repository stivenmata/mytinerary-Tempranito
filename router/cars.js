import { Router } from "express";
import carController from "../controllers/cars/read.js";

const routerCars = Router();

routerCars.get("/allCars", carController)

export default routerCars;