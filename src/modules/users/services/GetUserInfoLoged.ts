
import {container,injectable,inject} from 'tsyringe';
import Cliente from '../infra/typeorm/entities/Usuario';
import crypto from "crypto";
import UsersRepository from '../repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import MD5Provider from '../providers/MD5Provider/models/MD5Provider';
import MD5HashProvider from '../providers/MD5Provider/implementations/MD5HashProvider';

interface Request{
 id_usuario:string;
}
@injectable()
class GetUserInfoLoged {
  constructor(
    @inject('UsersRepository')
    private repository:UsersRepository,
  
    ){}
  public async execute({
    id_usuario
  }: Request): Promise<Cliente> {
    
    
    const findUser = await this.repository.findById(id_usuario);
    
    if(!findUser){
        throw new AppError('Este usuário não existe')
    }   

    return findUser;
  }
}

export default GetUserInfoLoged;
