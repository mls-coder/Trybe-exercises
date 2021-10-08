const fs = require('fs').promises;

const arq = 'texto.txt';

fs.writeFile(arq, 'Oi Oi Oi')
    .then((data ) => {
        console.log('Success!');
    })
    .catch((e) => {
        console.log(`Could't write in ${arq}.\nErro: ${e}`);
    });
