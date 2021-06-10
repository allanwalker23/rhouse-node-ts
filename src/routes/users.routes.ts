import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ClienteRepository from '../repositories/ClienteRepository';

const clienteRouter = Router();

clienteRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(ClienteRepository)

    const allClientes = await repository.find({skip:0,take:3});

    return response.json(allClientes);
});


clienteRouter.post('/', async (request, response) => {

});


export default clienteRouter;
