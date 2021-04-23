import { Document, Model, Types } from 'mongoose';
import mongoose from '../../database';

export interface InventoryInterface extends Document {
  createdAt: Date;
  date: Date;
  deposit: Types.ObjectId;
  order: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
};

const InventorySchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now },
  deposit: { type: mongoose.Schema.Types.ObjectId, ref: 'Deposit', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const Inventory: Model<InventoryInterface> = mongoose.model('Inventory', InventorySchema);

export default Inventory;