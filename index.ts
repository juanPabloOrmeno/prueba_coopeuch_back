import Server from "./classes/server";
import bodyParser from 'body-parser';
import cors from 'cors';

import { connectMongo } from "./classes/mongo";

import userRouters from "./routes/tarea";


const server = new Server();

//cors
server.app.use( cors({ origin: true, credentials: true }));

//body parse
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());

//rutas
server.app.use( '/user', userRouters);


//conectar bd
connectMongo();


//levanta espress
server.start();