
import {container,injectable,inject} from 'tsyringe';
import Cliente from '../infra/typeorm/entities/Usuario';
import crypto from "crypto";
import UsersRepository from '../repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import MD5Provider from '../providers/MD5Provider/models/MD5Provider';
import MD5HashProvider from '../providers/MD5Provider/implementations/MD5HashProvider';
import UpdateUserDTO from '../dtos/UpdateUserDTO';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private repository:UsersRepository,
    
    ){}
  public async execute({
    id,email,nome_completo,nome_usuario,telefone,
    cpf,
    cep,
    bairro,
    cidade,
    logradouro,
    complemento,
    numero,
    sobre_voce,
  }: UpdateUserDTO): Promise<Cliente> {
    
    const findEmail = await this.repository.findByEmail(email);

    const findCpf = await this.repository.findByCpf(cpf);

    const findNomeUsuarioCliente = await this.repository.findByNomeUsuario(nome_usuario);
    
    const findTelefone = await this.repository.findByTelefone(telefone);

    const user = await this.repository.findById(id);

    if(!user){
        throw new AppError('Este usuário não existe!')
    }

    if(findEmail && findEmail.id != user.id){
        throw new AppError('Este email já existe!')
    }

    if(findCpf && findCpf.id != user.id){
        throw new AppError('Este cpf já está sendo utilizado!')
    }

    if(findNomeUsuarioCliente && findNomeUsuarioCliente.id != user.id){
      throw new AppError('Este nome de usuário já existe!')
    }

    if(findTelefone && findTelefone.id != user.id){
        throw new AppError('Este telefone já existe!')
    }   

    const usuario = await this.repository.update({
       id,
       bairro,
       cep,
       cpf,
       email,
       nome_completo,
       nome_usuario,
       sobre_voce,
       telefone,
       numero,
       logradouro,
       complemento,
       cidade
        
    });

    return usuario;
  }
}

export default UpdateUserService;
