import { Router } from "express";
import routerUsers from "./users.js";
import routerProducts from "./products.js";
import routerCars from "./cars.js";
import routerOrders from "./orders.js";
import routerReviews from "./reviews.js";
import routerAnimes from "./animes.js";
import routerCategories from "./categories.js";


let rounterIndex = Router();
rounterIndex.use("/users",routerUsers)
rounterIndex.use("/products",routerProducts)
rounterIndex.use("/cars",routerCars)
rounterIndex.use("/orders",routerOrders)
rounterIndex.use("/reviews",routerReviews)
rounterIndex.use("/animes",routerAnimes)
rounterIndex.use("/categories",routerCategories)


export default rounterIndex;