import { Application, Router } from "express";
import { AuthRouter } from "./auth.route";

const routesList: Array<[string, Router]> = [["/api/v1/auth", AuthRouter]];

export const routes = (app: Application) => {
  routesList.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
