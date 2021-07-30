import NoticiaRepository from '@modules/news/repositories/NoticiaRepository';
import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';

const noticiasRouter = Router();

noticiasRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(NoticiaRepository)

    const all = await repository.find();

    return response.json(all);
});


noticiasRouter.post('/', async (request, response) => {

});


export default noticiasRouter;
