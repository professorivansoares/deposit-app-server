import { Request, Response } from "express";
import Supplier from "../models/Supplier";

class SupplierController {
  static async create(req: Request, res: Response) {
    try {
      const created = await Supplier.create(req.body);

      return res.status(200).json(created);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

export default SupplierController;