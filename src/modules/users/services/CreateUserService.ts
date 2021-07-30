
import {container,injectable,inject} from 'tsyringe';
import Cliente from '../infra/typeorm/entities/Usuario';
import crypto from "crypto";
import UsersRepository from '../repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import MD5Provider from '../providers/MD5Provider/models/MD5Provider';
import MD5HashProvider from '../providers/MD5Provider/implementations/MD5HashProvider';

interface Request{
   nome_completo:string;
   nome_usuario:string;
   email:string;
   senha:string;
   telefone:string;

	
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private repository:UsersRepository,
    
    @inject('HashProvider')
    private hashProvider:MD5Provider
    ){}
  public async execute({
    email,nome_completo,nome_usuario,senha,telefone
  }: Request): Promise<Cliente> {
    
    const findEmail = await this.repository.findByEmail(email);
    const findNomeUsuarioCliente = await this.repository.findByNomeUsuario(nome_usuario);
    
    const findTelefone = await this.repository.findByTelefone(telefone);

    if(findEmail){
        throw new AppError('Este email já existe!')
    }

    if(findNomeUsuarioCliente){
      throw new AppError('Este nome de usuário já existe!')
    }

    if(findTelefone){
        throw new AppError('Este telefone já existe!')
    }   

    var hashedPassword = await this.hashProvider.generateHash(senha);

    const usuario = await this.repository.create({
        nome_completo,
        nome_usuario,
        email,
        senha:hashedPassword,
        telefone,
        tipo_usuario:0,
        
    });

    return usuario;
  }
}

export default CreateUserService;
