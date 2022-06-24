import { Router } from "express";
import { NewClientController } from "../Controllers/NewClientController.js";
import { NewClientMiddlewares } from "../Middlewares/NewClientMiddlewares.js";

const NewClientRouter = Router();

NewClientRouter.post("/clients", NewClientMiddlewares, NewClientController);

export default NewClientRouter;