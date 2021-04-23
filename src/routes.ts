import { Router } from "express";
import SupplierController from "./app/controllers/SupplierController";

const routes: Router = Router();

routes.post('/suppliers', SupplierController.create);

export default routes;