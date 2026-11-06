
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const webRoutes = require('./src/routes/web');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/', webRoutes);

// Página não encontrada
app.use((req, res) => {
    res.status(404).send('Página não encontrada.');
});

// Inicialização
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
