import { Document, Model, Types } from 'mongoose';
import mongoose from '../../database';

interface ProductOrderInterface {
  product: Types.ObjectId;
  quantity: number;
};

enum OrderStatus {
  CREATED = 'created',
  COMPLETED = 'completed'
}

export interface OrderInterface extends Document {
  createdAt: Date;
  description: string;
  date: Date;
  deposit: Types.ObjectId;
  products: ProductOrderInterface[];
  status: OrderStatus;
};

const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  deposit: { type: mongoose.Schema.Types.ObjectId, ref: 'Deposit', required: true },
  products: [{ type: mongoose.Schema.Types.Mixed, required: true }],
  status: { type: String, required: true }
});

const Order: Model<OrderInterface> = mongoose.model('Order', OrderSchema);

export default Order;