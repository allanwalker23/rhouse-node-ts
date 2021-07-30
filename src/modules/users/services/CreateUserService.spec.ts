
import AppError from '@shared/errors/AppError';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';
import FakeMD5HashProvider from '../providers/MD5Provider/fakes/FakeMD5HashProvider';

describe('CreateUser', () => {
  it('Deve criar um novo usúario', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();
    const createUser= new CreateUserService(
        fakeUsersRepository,
        fakeHashProvider
    );

    const user = await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    });


    expect(user.email).toBe('allanhipolito66@gmail.com');
  });

  it('Não deve criar um usuário com email igual', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();

    const createUser= new CreateUserService(
        fakeUsersRepository,
        fakeHashProvider
    );

    await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    });

    expect(createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    })).rejects.toBeInstanceOf(AppError);

  });

  it('Não deve criar um usuário com nome de usuário igual', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();

    const createUser= new CreateUserService(
        fakeUsersRepository,
        fakeHashProvider
    );

    await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"danana@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)3274-8420",
    });

    expect(createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)3221-48420",
    })).rejects.toBeInstanceOf(AppError);

    
  });

  it('Não deve criar um usuário com telefone igual', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();
    
    const createUser= new CreateUserService(
        fakeUsersRepository,
        fakeHashProvider
    );

    await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"danana@gmail.com",
        nome_usuario:"sdsada",
        senha:"23062003",
        telefone:"(21)3274-8420",
    });

    expect(createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)3274-8420",
    })).rejects.toBeInstanceOf(AppError);
  });

});