import { Router } from "express";
import { averageController } from "../controllers/averageController";

export const AverageRouter = Router();

AverageRouter.get("/media", averageController);
