import { Router } from "express";
import {
  createUsaha,
  deleteUsaha,
  getJenisUsaha,
  getUsaha,
  updateUsaha,
} from "../controllers/usaha.controller";

export const usahaRouter: Router = Router();

usahaRouter.get("/", getUsaha);
usahaRouter.get("/:id", getUsaha);
usahaRouter.post("/jenis_usaha", getJenisUsaha);
usahaRouter.post("/", createUsaha);
usahaRouter.put("/:id", updateUsaha);
usahaRouter.delete("/:id", deleteUsaha);
