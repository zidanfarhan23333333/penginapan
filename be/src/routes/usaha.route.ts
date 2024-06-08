import { Router } from "express";
import {
  createUsaha,
  deleteUsaha,
  getUsaha,
  updateUsaha,
} from "../controllers/usaha.controller";

export const usahaRouter: Router = Router();

usahaRouter.get("/", getUsaha);
usahaRouter.get("/:id", getUsaha);
usahaRouter.post("/", createUsaha);
usahaRouter.put("/:id", updateUsaha);
usahaRouter.delete("/:id", deleteUsaha);
