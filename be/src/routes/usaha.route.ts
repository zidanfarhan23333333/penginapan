import { Router } from "express";
import { getUsaha } from "../controllers/usaha.controller";

export const usahaRouter: Router = Router();

usahaRouter.get("/", getUsaha);
