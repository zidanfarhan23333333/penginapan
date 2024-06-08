import { Router } from "express";
import {
  createUsaha,
  deleteUsaha,
  getUsaha,
} from "../controllers/usaha.controller";

export const usahaRouter: Router = Router();

usahaRouter.get("/", getUsaha);
usahaRouter.get("/:id", getUsaha);
usahaRouter.post("/", createUsaha);
usahaRouter.delete("/", deleteUsaha);
