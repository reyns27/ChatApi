import express from 'express';
import logger from 'morgan';
import {dirname, join} from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';
import {createServer} from 'node:http';
import RouterManager from './src/router/index.js';
import  pg from 'pg';

const pool = new pg.Pool({
  user:'admin',
  database:'db_kzck',
  port:5432,
  host:'dpg-cknbi1iv7m0s73cbup7g-a.oregon-postgres.render.com',
  password:'CYTe6xI3oP5MbqRGHEvJuqRWxSu41cMm',
  ssl:true
})
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT ?? 3000;


io.on('connection', async (socket) => {
    console.log('a user has connected!')
    socket.on('disconnect', () => {
      console.log('an user has disconnected')
    })

    socket.on('message', (body) => {
      socket.broadcast.emit('message',{
        body,
        from:socket.id
      });
    })
});


//--> Logger
app.use(logger('dev'));
//-->Router
app.get('/create', async (req, res) => {
  const result = await pool.query(`SELECT *FROM "User"`)
  .then((data) => res.json(data.rows[0]));
  console.log(result);
});

app.use(express.static(join(__dirname,'./client/dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname,'./client/dist/index.html'))
});



app.get('/api',RouterManager);


server.listen(port, () => {
    console.log(`App listening on port ${port}`);
})