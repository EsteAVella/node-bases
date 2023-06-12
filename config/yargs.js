const argv = require("yargs")
                    .options("b", {
                        alias: "base",
                        type:"number",
                        demandOption: true
                    })
                    .options("l", {
                        alias:"listar",
                        type:"boolean",
                        default: false,
                    })
                    .options("h", {
                        alias:"hasta",
                        type:"number",
                        default: 10,
                    })
                    .check( (argv, options ) =>{
                        if( isNaN( argv.b ) ){
                            throw "La base tiene que ser un numero";
                        }
                        return true;
                    } )    
                    .argv;

module.exports = {
    argv,
}