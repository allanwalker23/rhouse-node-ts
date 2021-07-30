import { container} from 'tsyringe';
import UsuarioRepository from '@modules/users/infra/typeorm/repositories/UsuarioRepository';
import '@modules/users/providers';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import LocalRepository from '@modules/properties/infra/typeorm/repositories/LocalRepository';
import ILocalRepository from '@modules/properties/repositories/ILocalRepository';

container.registerSingleton<UsersRepository>(
    'UsersRepository',
    UsuarioRepository
);

container.registerSingleton<ILocalRepository>(
    'LocalRepository',
    LocalRepository
);