import express from 'express';
import logger from 'morgan';
import { Server } from 'socket.io';
import {createServer} from 'node:http';
import RouterManager from './src/router/index.js';

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT ?? 3000;
import { CLientDB } from './db/DB.js';


io.on('connection', async (socket) => {
    console.log('a user has connected!')
    socket.on('disconnect', () => {
      console.log('an user has disconnected')
    })
});

await CLientDB.connect();
//--> Logger
app.use(logger('dev'));
//-->Router
app.use(RouterManager);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
})