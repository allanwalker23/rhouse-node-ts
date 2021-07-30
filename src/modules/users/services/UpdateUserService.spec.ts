
import AppError from '@shared/errors/AppError';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';
import FakeMD5HashProvider from '../providers/MD5Provider/fakes/FakeMD5HashProvider';
import UpdateUserService from './UpdateUserService';

describe('CreateUser', () => {
  it('Deve criar um novo usúario e atualizar seu nome', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();
    const createUser= new CreateUserService(
        fakeUsersRepository,
        fakeHashProvider
    );

    const updateUser= new UpdateUserService(
        fakeUsersRepository
    );

    const user = await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    });

    const newUser=await updateUser.execute({
        id:user.id,
        nome_completo:"Allan Rodrigo",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        telefone:"(21)32748420",
        bairro:"Quintino",
        cep:"21311380",
        cidade:"Rio De Janeiro",
        complemento:"Casa",
        cpf:"16329221704",
        logradouro:"Rua Louros",
        numero:729,
        sobre_voce:"Meu nome é Allan Hipólito tenho 23 anos gosto de flores..."  
    })
    expect(newUser.nome_completo).toBe('Allan Rodrigo');
  });


});