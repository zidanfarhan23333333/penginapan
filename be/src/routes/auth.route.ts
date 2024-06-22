import { Router } from "express";
import {
  getEmail,
  getUsers,
  login,
  register,
  resetPassword,
} from "../controllers/auth.controller";

export const AuthRouter: Router = Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
AuthRouter.post("/get-email", getEmail);
AuthRouter.post("/reset-password", resetPassword);
AuthRouter.get("/:id", getUsers);
