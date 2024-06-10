"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
const requireUser = (req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        return res.status(403).json({
            status: false,
            status_code: 403,
            message: "You should login first",
        });
    }
    return next();
};
exports.requireUser = requireUser;
//# sourceMappingURL=auth.js.map