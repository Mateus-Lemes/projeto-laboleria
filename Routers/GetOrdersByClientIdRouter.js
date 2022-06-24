import { Router } from "express";
import { getOrderByClientIdController } from "../Controllers/GetOrdersByClientIdController.js";

const GetOrdersByClientIdRouter = Router();

GetOrdersByClientIdRouter.get("/clients/:id/orders", getOrderByClientIdController);

export default GetOrdersByClientIdRouter;