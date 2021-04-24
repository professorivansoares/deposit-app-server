import app from './app';

// Iniciar server na porta do ambiente ou 3001
app.listen(process.env.PORT || 3001);