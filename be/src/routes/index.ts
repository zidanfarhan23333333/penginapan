import { Application, Router } from "express";
import { AuthRouter } from "./auth.route";
import { usahaRouter } from "./usaha.route";
import { pesananRouter } from "./pesanan.route";

const routesList: Array<[string, Router]> = [
  ["/api/v1/auth", AuthRouter],
  ["/api/usaha", usahaRouter],
  ["/api/pesanan", pesananRouter],
];

export const routes = (app: Application) => {
  routesList.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
