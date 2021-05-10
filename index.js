const app = require('./config/express');

console.log('Iniciando API na rota http://localhost:3000');
app.listen(3000);

module.exports = app;