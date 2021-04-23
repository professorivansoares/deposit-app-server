import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/crud-aula');
mongoose.Promise = global.Promise;

export default mongoose;