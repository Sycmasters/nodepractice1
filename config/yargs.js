const { boolean } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Base number of the multiplication table',
                    demandOption: true,
                    default:1
                })
                .option('l', {
                    alias: 'limit',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    description: 'Multiply up to this number'
                })
                .option('s', {
                    alias: 'show',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    description: 'Show the output on console'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'Base must be a number';
                    }
                     
                    return true;
                })
                .argv;

module.exports = argv;