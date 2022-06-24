import { Router } from "express";
import { NewOrderController } from "../Controllers/NewOrderController.js";
import { NewOrderMiddlewares } from "../Middlewares/NewOrderMiddlewares.js";

const NewOrderRouter = Router();

NewOrderRouter.post("/orders", NewOrderMiddlewares, NewOrderController);

export default NewOrderRouter;