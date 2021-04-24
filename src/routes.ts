import { Router } from "express";
import SupplierController from "./app/controllers/SupplierController";

const routes: Router = Router();

routes.post('/suppliers', SupplierController.create);
routes.get('/suppliers', SupplierController.find);
routes.get('/suppliers/:id', SupplierController.findOne);
routes.put('/suppliers/:id', SupplierController.updateOne);
routes.delete('/suppliers/:id', SupplierController.deleteOne);

export default routes;