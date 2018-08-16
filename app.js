const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listar } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo.red}`))
            .catch((e) => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

};