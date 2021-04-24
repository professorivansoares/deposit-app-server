import { Document, Model, Types } from 'mongoose';
import mongoose from '../../database';

export interface ProductInterface extends Document {
  createdAt: Date;
  description: string;
  name: string;
  picture_url: string;
  price: number;
  supplier: Types.ObjectId;
  weight: number;
};

const ProductSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  name: { type: String, required: true },
  picture_url: { type: String, required: true },
  price: { type: Number, required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  weight: { type: Number, required: true }
});

const Product: Model<ProductInterface> = mongoose.model('Product', ProductSchema);

export default Product;