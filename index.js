import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import NewCakeRouter from "./Routers/NewCakeRouter.js";
import NewClientRouter from "./Routers/NewClientRouter.js";
dotenv.config();

const app = express();

app.use(express.json(), cors());
app.use(NewCakeRouter, NewClientRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("o servidor está de pé na porta " + PORT + "!"));