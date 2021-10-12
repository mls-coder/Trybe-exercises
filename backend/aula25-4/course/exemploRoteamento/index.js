const express = require('express');
const app = express();

app.route('/')
// Requisições para rota GET `/` são resolvidas aqui!
    .get((_req, res) => res.status(200).send('Hello, get!'))
// Requisições para rota POST `/` são resolvidas aqui!
    .post((_req, res) => res.status(200).send('Hello, post!'));

app.route('/second')
    .get((_req, res) => res.status(200).send('Hello, get second'))
    .post((_req, res) => res.status(200).send('Hello, post second'));

app.listen(3003, () => {
    console.log('Aplicação ouvindo porta 3003');
});
