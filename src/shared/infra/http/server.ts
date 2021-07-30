import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
const https = require('https');
import fs from 'fs';
import routes from './routes';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import path from 'path';
import '@shared/infra/typeorm';
import '@shared/container';
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});


const hostname = 'www.dev.nspace.com.br';

let key = fs.readFileSync(path.resolve('src/config/key.pem'));
let cert = fs.readFileSync(path.resolve('src/config/cert.pem'));

var credentials = {
  key: key,
  cert: cert
};

const server = https.createServer(credentials,app);

app.listen(3333, () => {
  console.log('🏠 Rhouse server started!');
});

