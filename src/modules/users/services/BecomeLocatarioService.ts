
import {container,injectable,inject} from 'tsyringe';
import Usuario from '../infra/typeorm/entities/Usuario';
import crypto from "crypto";
import UsersRepository from '../repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import MD5Provider from '../providers/MD5Provider/models/MD5Provider';
import MD5HashProvider from '../providers/MD5Provider/implementations/MD5HashProvider';
import usersRouter from '../infra/http/routes/users.routes';

interface Request{
  id_usuario:string;

	
}
@injectable()
class BecomeLocatarioService {
  constructor(
    @inject('UsersRepository')
    private repository:UsersRepository,

    ){}
  public async execute({
    id_usuario
  }: Request): Promise<Usuario> {
    
    const user = await this.repository.findById(id_usuario)

    if(!user){
        throw new AppError('Usuário não existente')
    }

    if(user.tipo_usuario==1){
      throw new AppError('O usuário já é um locador')
    }

    //OUTRAS VALIDAÇÕES FUTURAS...

    user.tipo_usuario=1;

    await this.repository.save(user);

    return user;
  }
}

export default BecomeLocatarioService;
