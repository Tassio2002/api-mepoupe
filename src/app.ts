const express = require("express");
const cors = require("cors");
const logger = require("morgan");
import { Request, Response } from "express";
import { AverageRouter } from "./routes/averageRoute";
import { getCepRouter } from "./routes/getCepRoute";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.get("/media", AverageRouter);
app.get("/cep", getCepRouter);

app.get("/", function (req: Request, res: Response) {
  res.status(200).send({
    message: "App is running see the routes /media and /cep",
  });
});

module.exports = app;
