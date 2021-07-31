import UsuarioRepository from '@modules/users/infra/typeorm/repositories/UsuarioRepository';
import BecomeLocatarioService from '@modules/users/services/BecomeLocatarioService';
import CreateUserService from '@modules/users/services/CreateUserService';
import GetUserInfoLoged from '@modules/users/services/GetUserInfoLoged';
import GetInfoUserLoged from '@modules/users/services/GetUserInfoLoged';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import { Router } from 'express';
import {container} from 'tsyringe'
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
usersRouter.get('/', async (request, response) => {
    const usersRepository = new UsuarioRepository();

    const allUsers = await usersRepository.find();

    return response.json(allUsers);
});

usersRouter.get('/findUser',ensureAuthenticated, async (request, response) => {
    
    const getInfoService = container.resolve(GetUserInfoLoged);

    const user = await getInfoService.execute({id_usuario:request.user.id});

    return response.json(user);
});


usersRouter.post('/', async (request, response) => {
    const{nome_completo,nome_usuario,email,senha,telefone}=request.body;

    const usersService= container.resolve(CreateUserService);

    const cliente = await usersService.execute({
        email,
        nome_completo,
        nome_usuario,
        senha,
        telefone
    })

    response.json(cliente)


});

usersRouter.post('/becomeLocatario/',ensureAuthenticated, async (request, response) => {

    const becomeLocatarioService= container.resolve(BecomeLocatarioService)

    const user = await becomeLocatarioService.execute({
        id_usuario:request.user.id
    })

    return response.json(user);


});

usersRouter.put('/', ensureAuthenticated, async (request, response) => {
    const{bairro,cep,
        complemento,cpf,email,logradouro,nome_completo,
        sobre_voce,numero,telefone,nome_usuario}=request.body;

    const updateUser= container.resolve(UpdateUserService);

    console.log(nome_completo)
    const cliente = await updateUser.execute({
       id:request.user.id,
       bairro,
       cep,
       complemento,
       cpf,
       email,
       logradouro,
       nome_completo,
       sobre_voce,numero,telefone,nome_usuario
    })

    response.json(cliente)


});


export default usersRouter;
