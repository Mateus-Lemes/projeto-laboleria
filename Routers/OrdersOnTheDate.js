import { Router } from "express";
import { OrdersOnTheDateController } from "../Controllers/OrdersOnTheDateController.js";

const OrdersOnTheDateRouter = Router();

OrdersOnTheDateRouter.get("/orders", OrdersOnTheDateController)

export default OrdersOnTheDateRouter;