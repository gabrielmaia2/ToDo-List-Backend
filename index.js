import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';

import {listRouter} from './routes/List.js';
import {itemRouter} from './routes/Item.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
    }),
);
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(err);
});

app.use('/lists', listRouter);
app.use('/list', itemRouter);

const port = process.env.PORT || 4000;

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
