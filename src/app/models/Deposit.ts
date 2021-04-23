import { Document, Model } from 'mongoose';
import mongoose from '../../database';
import AddressInterface from './AddressInterface';

export interface DepositInterface extends Document {
  address: AddressInterface;
  createdAt: Date;
  name: string;
};

const DepositSchema = new mongoose.Schema({
  address: { type: mongoose.Schema.Types.Mixed, required: true },
  createdAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
});

const Deposit: Model<DepositInterface> = mongoose.model('Deposit', DepositSchema);

export default Deposit;