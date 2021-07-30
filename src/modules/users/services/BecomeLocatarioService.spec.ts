
import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';


import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';
import FakeMD5HashProvider from '../providers/MD5Provider/fakes/FakeMD5HashProvider';
import BecomeLocatarioService from './BecomeLocatarioService';
import UsuarioRepository from '../infra/typeorm/repositories/UsuarioRepository';
import Usuario from '../infra/typeorm/entities/Usuario';

describe('BecomeLocatario', () => {
  it('Deve criar um novo usúario e mudar sua função para locatário', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();

    const becomeLocatarioService= new BecomeLocatarioService(
        fakeUsersRepository,
    );

    const createUser= new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
  );

    const user =await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    });


    expect(await becomeLocatarioService.execute({
      id_usuario:user.id
    })).toBeInstanceOf(Usuario)
  });

  it('Não deve mudar a função de um usuário que já é do tipo locátario', async () => {
    const fakeUsersRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeMD5HashProvider();

    const becomeLocatarioService= new BecomeLocatarioService(
        fakeUsersRepository,
    );

    const createUser= new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
  );

    const user =await createUser.execute({
        nome_completo:"Allan Hipolito De Oliveira",
        email:"allanhipolito66@gmail.com",
        nome_usuario:"allanhipolito66",
        senha:"23062003",
        telefone:"(21)32748420",
    });

    await becomeLocatarioService.execute({
      id_usuario:user.id
    })


    expect(becomeLocatarioService.execute({
      id_usuario:user.id
    })).rejects.toBeInstanceOf(AppError)
  });

  it('Não deve mudar a função de um usuário não existente', async () => {
    const fakeUsersRepository = new FakeUserRepository();

    const becomeLocatarioService= new BecomeLocatarioService(
        fakeUsersRepository,
    );

    expect(becomeLocatarioService.execute({
      id_usuario:'no-existing-user'
    })).rejects.toBeInstanceOf(AppError)
  });


});