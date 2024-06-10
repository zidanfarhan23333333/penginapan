"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_route_1 = require("./auth.route");
const usaha_route_1 = require("./usaha.route");
const routesList = [
    ["/api/v1/auth", auth_route_1.AuthRouter],
    ["/api/v1/usaha", usaha_route_1.usahaRouter],
];
const routes = (app) => {
    routesList.forEach((route) => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map