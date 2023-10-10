const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'fullcycle'
});

app.get('/', (req, res) => {
    // Adicione um nome e recupere todos os nomes para exibir
    // Implemente a lógica aqui
    res.send('<h1>Full Cycle Rocks!</h1>\n\n- [Lista de nomes]');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});