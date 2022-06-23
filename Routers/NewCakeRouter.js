import { Router } from "express";
import { NewCakeController } from "../Controllers/NewCakeController.js";
import { NewCakesMiddlewares } from "../Middlewares/NewCakesMiddlewares.js";

const NewCakeRouter = Router();

NewCakeRouter.post("/cakes", NewCakesMiddlewares ,NewCakeController);

export default NewCakeRouter;