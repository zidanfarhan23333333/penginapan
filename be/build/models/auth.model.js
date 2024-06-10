"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authSchema = new mongoose_1.default.Schema({
    user_id: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String
    }
}, { timestamps: true, _id: true });
const authModel = mongoose_1.default.model("auths", authSchema);
exports.default = authModel;
//# sourceMappingURL=auth.model.js.map