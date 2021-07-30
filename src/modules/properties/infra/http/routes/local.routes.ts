
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import LocalRepository from '@modules/properties/infra/typeorm/repositories/LocalRepository';
import CreateLocalService from '@modules/properties/services/CreateLocalService';
import{uuid} from 'uuidv4'
const localRouter = Router();


localRouter.get('/filter', async (request, response) => {
    const repository = getCustomRepository(LocalRepository)
    const { bairro,tipo_propriedade_id=1,cidade_id=1,valor_min,valor_max,qtd_quarto,qtd_banheiro,page=0 } = request.query;

    let findAll;
    
    if(valor_max===undefined && valor_min===undefined && qtd_quarto===undefined && qtd_banheiro===undefined){
    if(bairro===undefined){
        //findAll = await repository.find({loadEagerRelations:false,where:{cidade_id:cidade_id,tipo_propriedade_id:tipo_propriedade_id},take:2,skip:(Number(page)*2)})
    }else{
       // findAll = await repository.find({loadEagerRelations:false,where:{cidade_id:cidade_id,tipo_propriedade_id:tipo_propriedade_id},take:2,skip:(Number(page)*2)})
    }
        
        
        
    }else{
        
     //   findAll = await repository.find({loadEagerRelations:false,where:{cidade_id,qtd_banheiro,qtd_quarto,bairro}});
        
    }
  
     
      
    return response.json(findAll);
});

localRouter.get('/recents', async (request, response) => {
    const repository = getCustomRepository(LocalRepository)

   // const all = await repository.find({order:{created_at:"DESC"}});


    return response.json('ok');
});

localRouter.get('/', async (request, response) => {
    const repository = getCustomRepository(LocalRepository)

    const all = await repository.find();
    console.log(Number(uuid()))

    return response.json(all);
});


localRouter.post('/', async (request, response) => {
    const repository = getCustomRepository(LocalRepository)
    const { 
        bairro,
        cep,
        cidade_id,
        locador_id,
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

        //onst CreateLocal = new CreateLocalService();

       
      

    
});



localRouter.post('/', async (request, response) => {

});


export default localRouter;
