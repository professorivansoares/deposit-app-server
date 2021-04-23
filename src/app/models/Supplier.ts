import { Document, Model } from 'mongoose';
import AddressInterface from './AddressInterface';
import mongoose from '../../database';

export interface SupplierInterface extends Document {
  address: AddressInterface;
  createdAt: Date;
  email: string;
  name: string;
  tax_id: string;
};

const SupplierSchema = new mongoose.Schema({
  address: { type: mongoose.Schema.Types.Mixed, required: false },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  name: { type: String, required: true },
  tax_id: { type: String, required: true }
});

const Supplier: Model<SupplierInterface> = mongoose.model('Supplier', SupplierSchema);

export default Supplier;