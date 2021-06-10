import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Propriedade from '../models/Propriedade';
import ClienteRepository from '../repositories/ClienteRepository';
import PropriedadeRepository from '../repositories/PropriedadeRepository';
import CreatePropriedadeService from '../services/CreatePropriedadeService';

const propriedadeRouter = Router();

propriedadeRouter.get('/filterInitial', async (request, response) => {
    const repository = getCustomRepository(PropriedadeRepository)
    const { bairro,tipo_propriedade_id,cidade_id } = request.query;


    const findAll = (await repository.find()).filter(
        (propriedade:Propriedade) =>
          propriedade.bairro == bairro ||
          propriedade.cidade.id== cidade_id &&
          propriedade.tipo_propriedade_id==Number(tipo_propriedade_id)
      );

      

    

      
    return response.json(findAll);
});


propriedadeRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(PropriedadeRepository)

    const all = await repository.find({
    
        skip:1,take:3});

    return response.json(all);
});








propriedadeRouter.post('/', async (request, response) => {
    const repository = getCustomRepository(PropriedadeRepository)
    const { 
        bairro,
        cep,
        cidade,
        cidade_id,
        complemento,
        descricao,
        id,
        numero,
        preco_mensal,
        qtd_banheiro,
        qtd_quarto,
        rua,
        titulo,
        url_foto}=request.body;

        const CreatePropriedade = new CreatePropriedadeService();

        const propriedade = await CreatePropriedade.execute({
            bairro,
            cep,
            cidade,
            cidade_id,
            complemento,
            descricao,
            id,
            numero,
            preco_mensal,
            qtd_banheiro,
            qtd_quarto,
            rua,
            titulo,
            url_foto
        });
      

    return response.json(propriedade);
});



propriedadeRouter.post('/', async (request, response) => {

});


export default propriedadeRouter;
