import { Application, Router } from "express";
import { AuthRouter } from "./auth.route";
import { usahaRouter } from "./usaha.route";

const routesList: Array<[string, Router]> = [
  ["/api/v1/auth", AuthRouter],
  ["/api/v1/usaha", usahaRouter],
];

export const routes = (app: Application) => {
  routesList.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
