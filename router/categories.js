import { Router } from "express";
import categoryController from "../controllers/categories/read.js";

const routerCategories = Router();

routerCategories.get("/allCategories", categoryController)

export default routerCategories;