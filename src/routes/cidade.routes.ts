import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CidadeRepository from '../repositories/CidadeRepository';
import LocadorRepository from '../repositories/LocadorRepository';

const cidadeRouter = Router();

cidadeRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(CidadeRepository)

    const all = await repository.find();

    return response.json(all);
});

cidadeRouter.get('/:id', async (request, response) => {
    const repository = getCustomRepository(CidadeRepository)
    const {id} = request.params;
    
    const all = await repository.findOne(id);

    return response.json(all);
});

cidadeRouter.get('/best', async (request, response) => {
    const repository = getCustomRepository(CidadeRepository)

    const all = await repository.find();

    return response.json(all);
});



cidadeRouter.post('/', async (request, response) => {

});


export default cidadeRouter;
