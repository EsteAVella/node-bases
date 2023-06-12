const fs = require("fs");
const colors = require('colors');

let base;

const crearArchivo = ( base = 5, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {
        
    let salida = "";
    
    for ( let i = 1; i <= hasta; i++ ){
        
        salida+=`${ base } x ${ i } = ${ base * i }\n`;
        
    }
    if ( listar ){
        console.log("===================".blue);
        console.log( `Tabla de ${ base } `.yellow);
        console.log("===================".blue);        
        console.log(salida.rainbow);
    }
    

    fs.writeFile( `./salida/tabla-${base}.txt`, salida , (err)=>{
        console.log(err);
    });

    resolve( `tabla-${base}.txt `.green);

})
}


module.exports = {
    crearArchivo,
}