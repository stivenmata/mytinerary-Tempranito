import { Router } from "express";
import userController from "../controllers/users/read.js";

const routerUsers = Router();

routerUsers.get("/allUsers", userController)

export default routerUsers;