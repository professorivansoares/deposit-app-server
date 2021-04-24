import { Request, Response } from "express";
import Supplier from "../models/Supplier";

class SupplierController {
  // método static para criação do fornecedor
  static async create(req: Request, res: Response) {
    try {
      // cria o fornecedor
      const created = await Supplier.create(req.body);

      // retorna OK caso o fornecedor seja criado
      return res.status(200).json(created);
    } catch (err) {
      // retorna Bad Request caso o ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para atualização do fornecedor
  static async updateOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // atualiza o fornecedor
      const updated = await Supplier.updateOne({ _id: id }, req.body);

      // retorna OK se o fornecedor for atualizado com sucesso
      return res.status(200).json(updated);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para remoção do fornecedor
  static async deleteOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // deleta o fornecedor
      const deleted = await Supplier.deleteOne({ _id: id });

      // retorna OK se o fornecedor for deletado com sucesso
      return res.status(200).json(deleted);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para listar todos os fornecedores
  static async find(req: Request, res: Response) {
    try {
      // busca todos os fornecedores
      const suppliers = await Supplier.find();

      // retorna OK e todos os fornecedores
      return res.status(200).json(suppliers);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para mostrar um fornecedor
  static async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // busca o fornecedor
      const supplier = await Supplier.findOne({ _id: id });

      // retorna OK e o fornecedor buscado
      return res.status(200).json(supplier);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }
}

export default SupplierController;