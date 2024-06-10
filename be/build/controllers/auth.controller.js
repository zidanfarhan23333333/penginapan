"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.getEmail = exports.login = exports.register = void 0;
const hashing_1 = require("../utils/hashing");
const uuid_1 = require("uuid");
const auth_service_1 = require("../services/auth.service");
const jwt_1 = require("../utils/jwt");
const validator_1 = __importDefault(require("validator"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = (0, uuid_1.v4)();
    const { email, name, password, role } = req.body;
    if (req.body.email && !validator_1.default.isEmail(req.body.email)) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "Invalid email format",
        });
    }
    if (!email || !name || !password || !role) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "All fields are required",
        });
    }
    if (password.length <= 6) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "password must be at least 6 characters",
        });
    }
    const hashedPassword = (0, hashing_1.hashPassword)(password);
    const authData = {
        user_id,
        email,
        name,
        password: hashedPassword,
        role
    };
    try {
        const userEmail = yield (0, auth_service_1.findUserByEmail)(email);
        if (userEmail) {
            return res.status(409).send({
                status: false,
                status_code: 409,
                message: "Email is already registered",
            });
        }
        yield (0, auth_service_1.createUser)(authData);
        return res.status(200).json({
            status: true,
            status_code: 200,
            message: "Register successfully",
            data: authData,
        });
    }
    catch (error) {
        return res.status(422).send({
            status: false,
            status_code: 422,
            message: error.message,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (req.body.email && !validator_1.default.isEmail(req.body.email)) {
            return res.status(400).send({
                status: false,
                status_code: 400,
                message: "Invalid email format",
            });
        }
        if (!email || !password) {
            return res.status(400).send({
                status: false,
                status_code: 400,
                message: "All fields are required",
            });
        }
        try {
            const user = yield (0, auth_service_1.findUserByEmail)(email);
            if (!user) {
                return res.status(401).json({
                    status: false,
                    status_code: 401,
                    message: "Invalid email or password",
                });
            }
            const accessToken = (0, jwt_1.signJWT)(Object.assign({}, user), { expiresIn: "1d" });
            const validPassword = user && typeof user.password === "string"
                ? (0, hashing_1.checkPassword)(password, user.password)
                : false;
            if (!validPassword) {
                return res.status(401).json({
                    status: false,
                    status_code: 401,
                    message: "Invalid email or password",
                });
            }
            return res.status(200).send({
                status: true,
                status_code: 200,
                message: "Login success",
                data: user,
                token: accessToken,
            });
        }
        catch (error) {
            return res.status(422).send({
                status: false,
                status_code: 422,
                message: error.message,
            });
        }
    }
    catch (error) {
        return res.status(422).send({
            status: false,
            status_code: 422,
            message: error.message,
        });
    }
});
exports.login = login;
const getEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (req.body.email && !validator_1.default.isEmail(req.body.email)) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "Invalid email format",
        });
    }
    if (!email) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "Email are required",
        });
    }
    try {
        const user = yield (0, auth_service_1.findUserByEmail)(email);
        if (!user) {
            return res.status(404).json({
                status: false,
                status_code: 404,
                message: "Email not registered",
                data: {},
            });
        }
        return res.status(200).send({
            status: true,
            status_code: 200,
            message: "Password reset successfully",
            data: user,
        });
    }
    catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).send({
            status: false,
            status_code: 500,
            message: "Internal server error",
        });
    }
});
exports.getEmail = getEmail;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "Password are required",
        });
    }
    if (password.length <= 6) {
        return res.status(400).send({
            status: false,
            status_code: 400,
            message: "password must be at least 6 characters",
        });
    }
    try {
        const user = yield (0, auth_service_1.findUserByEmail)(email);
        if (!user) {
            return res.status(404).json({
                status: false,
                status_code: 404,
                message: "User not found",
                data: {},
            });
        }
        const newPassword = (0, hashing_1.hashPassword)(password);
        yield (0, auth_service_1.updateUserPassword)(email, newPassword);
        return res.status(200).send({
            status: true,
            status_code: 200,
            message: "Password reset successfully",
            newPassword: newPassword,
        });
    }
    catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).send({
            status: false,
            status_code: 500,
            message: "Internal server error",
        });
    }
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=auth.controller.js.map