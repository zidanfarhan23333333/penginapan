"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const usahaSchema = new mongoose_1.default.Schema({
    usaha_id: {
        type: String,
        unique: true,
    },
    pengusaha_id: {
        type: String,
    },
    nama_usaha: {
        type: String,
    },
    deskripsi_usaha: {
        type: String,
    },
    jenis_usaha: {
        type: String,
    },
    alamat_usaha: {
        type: String,
    },
    foto_usaha: {
        type: [String],
    },
    fasilitas: {
        type: [String],
    },
    harga: {
        type: String,
    },
}, { timestamps: true, _id: true });
const usahaModel = mongoose_1.default.model("usaha", usahaSchema);
exports.default = usahaModel;
//# sourceMappingURL=usaha.model.js.map