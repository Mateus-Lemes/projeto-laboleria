import { Router } from "express";
import { getOrdersByIdController } from "../Controllers/GetOrdersByIdController.js";

const GetOrdersByIdRouter = Router();

GetOrdersByIdRouter.get("/orders/:id", getOrdersByIdController)

export default GetOrdersByIdRouter;