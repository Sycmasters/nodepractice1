const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 1, show = false, limit = 10) => {
    
    try {
        let salida = '';
        let consoleOutput = '';

        for(let i = 1; i <= limit; i++) {
            salida += `${base} x ${ i } = ${ (base * i) } \n`;
            consoleOutput += `${base} ${'x'.red} ${ i } ${'='.yellow} ${ (base * i).toString().green } \n`;
        }

        if(show)
            console.log(consoleOutput);

        fs.writeFileSync(`./output/tables/tabla-${base}.txt`, salida);

        return `table-${base}.txt`.yellow;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createFile
};