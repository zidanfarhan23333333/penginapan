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
exports.getUsahaFoto = exports.getusahaAndDelete = exports.insertUsaha = exports.getUsahaAndUpdate = exports.getUsahaById = exports.getAllUsaha = void 0;
const usaha_model_1 = __importDefault(require("../models/usaha.model"));
const getAllUsaha = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield usaha_model_1.default
        .find()
        .then((data) => {
        return data;
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.getAllUsaha = getAllUsaha;
const getUsahaById = (usaha_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield usaha_model_1.default.find({ usaha_id: usaha_id });
});
exports.getUsahaById = getUsahaById;
const getUsahaAndUpdate = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield usaha_model_1.default.findOneAndUpdate({
        usaha_id: id,
    }, {
        $set: payload,
    });
});
exports.getUsahaAndUpdate = getUsahaAndUpdate;
const insertUsaha = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield usaha_model_1.default.create(payload);
});
exports.insertUsaha = insertUsaha;
const getusahaAndDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield usaha_model_1.default.findOneAndDelete({ usaha_id: id });
    }
    catch (error) {
        throw error;
    }
});
exports.getusahaAndDelete = getusahaAndDelete;
const getUsahaFoto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usaha = yield usaha_model_1.default.findOne({ id });
    const usahaFoto = usaha === null || usaha === void 0 ? void 0 : usaha.foto_usaha;
    return usahaFoto;
});
exports.getUsahaFoto = getUsahaFoto;
//# sourceMappingURL=usaha.service.js.map