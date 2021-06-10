import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import LocadorRepository from '../repositories/LocadorRepository';

const locadorRouter = Router();

locadorRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(LocadorRepository)

    const all = await repository.find({skip:2,take:1});

    return response.json(all);
});


locadorRouter.post('/', async (request, response) => {

});


export default locadorRouter;
