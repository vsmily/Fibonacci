import { Router } from "express";
import { getFibonacci } from "../controllers/fibonacci.controller.js";
import { validate } from "../middlewares/fibonacci.middleware.js";
export const router = Router();
router.get('/:id', validate, getFibonacci );