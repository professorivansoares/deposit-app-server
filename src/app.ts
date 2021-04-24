import routes from "./routes";
import express from 'express';
import cors from 'cors';

// Cria a aplicação express
const app = express();

// Configura CORS para acessar requisições
app.use(cors({ origin: true }));

// Adiciona middleware para aceitar dados tipo json
app.use(express.json());

// Adiciona rotas
app.use('/', routes);

export default app;