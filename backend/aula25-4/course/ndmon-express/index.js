const express = require('express');
const app = express();

app.get('/', handleNodemonExp);

app.listen(3001, () => {
    console.log('Aplicação escutando porta 3001');
});

function handleNodemonExp(_req, res) {
    res.status(200).send('Hello, Nodemon! EAE');
}
