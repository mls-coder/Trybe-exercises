const fs = require('fs').promises;

const arq = 'texto.txt';

fs.readFile(arq, 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(`Couldn't read ${arq}.\n ERRO: ${e}`);
        process.exit(1);
    });
