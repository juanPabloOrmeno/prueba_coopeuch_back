import express from 'express'
import swaggerUi from 'swagger-ui-express';
import http from 'http';
import { SERVER_PORT } from '../global/environment';
import * as swaggerDocument from '../swagger.json';

export default class Server{

    public app : express.Application;
    public port: number = 5000;

    private httpServer: http.Server;

     constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
    }


    start( ) {
        this.httpServer.listen(this.port, () => {
            this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
        });
        console.log('servidor corriendo en puerto: ' + this.port)
    }

}