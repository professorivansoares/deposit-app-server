import { Router } from "express";
import SupplierController from "./app/controllers/SupplierController";
import ProductController from "./app/controllers/ProductController";

const routes: Router = Router();

// Rotas para os fornecedores
routes.post('/suppliers', SupplierController.create);
routes.get('/suppliers', SupplierController.find);
routes.get('/suppliers/:id', SupplierController.findOne);
routes.put('/suppliers/:id', SupplierController.updateOne);
routes.delete('/suppliers/:id', SupplierController.deleteOne);

// Rotas para os produtos
routes.post('/products', ProductController.create);
routes.get('/products', ProductController.find);
routes.get('/products/:id', ProductController.findOne);
routes.put('/products/:id', ProductController.updateOne);
routes.delete('/products/:id', ProductController.deleteOne);

export default routes;