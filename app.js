
const { crearArchivo } = require("./helpers/multiplicar") 
const { argv } = require("./config/yargs")

const base = 3;

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo,"creado") )
    .catch( err => console.log(err) );



