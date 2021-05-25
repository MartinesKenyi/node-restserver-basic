const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        // cors
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use(express.json());

        // Direcctorio publico
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.usuariosRoutePath, require('../routes/usuarios') );
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port)
        })
    }

}

module.exports = Server;