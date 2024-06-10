"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usahaRouter = void 0;
const express_1 = require("express");
const usaha_controller_1 = require("../controllers/usaha.controller");
exports.usahaRouter = (0, express_1.Router)();
exports.usahaRouter.get("/", usaha_controller_1.getUsaha);
exports.usahaRouter.get("/:id", usaha_controller_1.getUsaha);
exports.usahaRouter.post("/", usaha_controller_1.createUsaha);
exports.usahaRouter.put("/:id", usaha_controller_1.updateUsaha);
exports.usahaRouter.delete("/:id", usaha_controller_1.deleteUsaha);
//# sourceMappingURL=usaha.route.js.map