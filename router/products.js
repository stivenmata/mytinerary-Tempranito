import { Router } from "express";
import productController from "../controllers/products/read.js";

const routerProducts = Router();

routerProducts.get("/allProducts", productController)

export default routerProducts;