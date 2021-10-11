const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

require('colors');

console.clear();

createFile(argv.b, argv.s, argv.l)
    .then(res => console.log(`File created: ${res}`))
    .catch(err => console.log(`Error: ${err}`));
