import { Request, Response, Router } from "express";
import UserController from './app/controllers/UserController';
const routes: Router = Router();

const userController = new UserController();

routes.get('/fullname/:_id', userController.showFullname);

export default routes;