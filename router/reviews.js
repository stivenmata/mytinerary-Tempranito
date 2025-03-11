import { Router } from "express";
import reviewController from "../controllers/reviews/read.js";

const routerReviews = Router();

routerReviews.get("/allReviews", reviewController)

export default routerReviews;