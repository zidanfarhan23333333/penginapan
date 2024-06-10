"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post("/register", auth_controller_1.register);
exports.AuthRouter.post("/login", auth_controller_1.login);
exports.AuthRouter.post("/get-email", auth_controller_1.getEmail);
exports.AuthRouter.post("/reset-password", auth_controller_1.resetPassword);
//# sourceMappingURL=auth.route.js.map