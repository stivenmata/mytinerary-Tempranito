import { Router } from "express";
import animeController from "../controllers/animes/read.js";

const routerAnimes = Router();

routerAnimes.get("/allAnimes", animeController)

export default routerAnimes;