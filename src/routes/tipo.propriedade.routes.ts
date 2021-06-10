import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import CidadeRepository from '../repositories/CidadeRepository';
import TipoPropriedadeRepository from '../repositories/TipoPropriedadeRepository';


const tipoPropriedadeRouter = Router();

tipoPropriedadeRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(TipoPropriedadeRepository)

    const all = await repository.find();

    return response.json(all);
});





tipoPropriedadeRouter.post('/', async (request, response) => {

});


export default tipoPropriedadeRouter;
