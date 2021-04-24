import { Request, Response } from "express";
import Product from "../models/Product";
import Supplier from "../models/Supplier";

class ProductController {
  // método static para criação do produto
  static async create(req: Request, res: Response) {
    try {
      // cria o produto
      const created = await Product.create(req.body);

      // retorna OK caso o produto seja criado
      return res.status(200).json(created);
    } catch (err) {
      // retorna Bad Request caso o ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para atualização do produto
  static async updateOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // atualiza o produto
      const updated = await Product.updateOne({ _id: id }, req.body);

      // retorna OK se o produto for atualizado com sucesso
      return res.status(200).json(updated);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para remoção do produto
  static async deleteOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // deleta o produto
      const deleted = await Product.deleteOne({ _id: id });

      // retorna OK se o produto for deletado com sucesso
      return res.status(200).json(deleted);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para listar todos os produtos
  static async find(req: Request, res: Response) {
    try {
      // busca todos os produtos
      const products = await Product.find();
      // popula com as informações do fornecedor
      //.populate({ path: 'supplier', model: Supplier});

      // retorna OK e todos os produtoes
      return res.status(200).json(products);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }

  // método static para mostrar um produto
  static async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      // busca o produto
      const product = await Product.findOne({ _id: id });

      // retorna OK e o produto buscado
      return res.status(200).json(product);
    } catch (err) {
      // retorna Bad Request caso ocorra algum erro
      res.status(400).json(err);
    }
  }
}

export default ProductController;