import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import NewCakeRouter from "./Routers/NewCakeRouter.js";
import NewClientRouter from "./Routers/NewClientRouter.js";
import NewOrderRouter from "./Routers/NewOrderRouter.js";
import OrdersOnTheDateRouter from "./Routers/OrdersOnTheDate.js";
import GetOrdersByIdRouter from "./Routers/GetOrdersByIdRouter.js";
import GetOrdersByClientIdRouter from "./Routers/GetOrdersByClientIdRouter.js";
dotenv.config();

const app = express();

app.use(express.json(), cors());
app.use(NewCakeRouter, NewClientRouter, NewOrderRouter, OrdersOnTheDateRouter, GetOrdersByIdRouter, GetOrdersByClientIdRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("o servidor está de pé na porta " + PORT + "!"));