"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://sfarkhan48:KrSit8N2RzCEQ8Vw@cluster0.xx2t4rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Mongodb connected successfully");
})
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
//# sourceMappingURL=connectDB.js.map