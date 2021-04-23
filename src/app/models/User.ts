import { Document, Model } from 'mongoose';
import AddressInterface from './AddressInterface';
import mongoose from '../../database';

export interface UserInterface extends Document {
  address: AddressInterface;
  age: number;
  createdAt: Date;
  email: string;
  firstname: string;
  lastname: string;
};

const UserSchema = new mongoose.Schema({
  address: { type: mongoose.Schema.Types.Mixed, required: false },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true }
});

const User: Model<UserInterface> = mongoose.model('User', UserSchema);

export default User;