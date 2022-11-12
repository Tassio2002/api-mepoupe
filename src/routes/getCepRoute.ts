import { Router } from "express";
import { getCepController } from "../controllers/getCepController";

export const getCepRouter = Router();

getCepRouter.get("/cep", getCepController);
