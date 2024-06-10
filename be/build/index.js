"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const deserializeToken_1 = __importDefault(require("./middleware/deserializeToken"));
const cors_1 = __importDefault(require("cors"));
// connect to db
require("./utils/connectDB");
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
const corsOrigin = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(express_1.default.static("uploads"));
app.use(express_1.default.static("profileImages"));
app.use((0, cors_1.default)(corsOrigin));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(deserializeToken_1.default);
(0, index_1.routes)(app);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map