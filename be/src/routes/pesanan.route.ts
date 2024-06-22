import { Router } from "express";
import {
  createPesananController,
  deletePesanan,
  getAllPesananController,
  getPesananByUser,
} from "../controllers/pesanan.controller";

export const pesananRouter: Router = Router();

pesananRouter.get("/", getAllPesananController);
pesananRouter.get("/:id", getAllPesananController);
pesananRouter.get("/:pemesan_id/:user_id", getPesananByUser);
pesananRouter.post("/", createPesananController);
pesananRouter.delete("/:id", deletePesanan);
