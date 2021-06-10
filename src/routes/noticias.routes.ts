import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ClienteRepository from '../repositories/ClienteRepository';
import NoticiaRepository from '../repositories/NoticiaRepository';
import PropriedadeRepository from '../repositories/PropriedadeRepository';

const noticiasRouter = Router();

noticiasRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(NoticiaRepository)

    const all = await repository.find();

    return response.json(all);
});


noticiasRouter.post('/', async (request, response) => {

});


export default noticiasRouter;
