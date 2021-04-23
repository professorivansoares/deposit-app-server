import routes from "./routes";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use('/', routes);

export default app;