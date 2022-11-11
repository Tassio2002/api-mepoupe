import { Router, Request, Response } from "express";
import { averageController } from "../controllers/averageController";

export const router = Router();

router.get('/media', averageController)