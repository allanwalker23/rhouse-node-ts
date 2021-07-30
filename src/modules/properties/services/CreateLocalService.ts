
import UsersRepository from '@modules/users/repositories/UsersRepository';
import AppError from '../../../shared/errors/AppError';
import Cidade from '../infra/typeorm/entities/Cidade';
import Local from '../infra/typeorm/entities/Local';
import LocalRepository from '../infra/typeorm/repositories/LocalRepository';
import {inject,injectable} from 'tsyringe';
import ILocalRepository from '../repositories/ILocalRepository';
interface Request{
    titulo: string;
    descricao: string;
    preco: number;
    qtd_quarto: number;
    qtd_banheiro: number;
    limite_pessoa: number;
    espaco_m2: number;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    visualizacoes: number;
    limite_garagem:number;
	  tipo_local_id:number;
    tipo_cobranca_id:number;
    foto_local_id:number;
    id_usuario:number;
    id_cidade:number;

	
}
@injectable()
class CreateLocalService {
  constructor(
    @inject('LocalRepository')
    private localRepository:ILocalRepository
    ){}
  
  public async execute({
  bairro,
  cep,
  complemento,
  descricao,
  numero,
  limite_garagem,
  qtd_banheiro,
  qtd_quarto,
  titulo,
  espaco_m2,
  foto_local_id,
  id_cidade,
  id_usuario,
  limite_pessoa,
  logradouro,
  preco,
  tipo_cobranca_id,
  tipo_local_id,
  visualizacoes

  }: Request): Promise<Local> {
    

    const local = await this.localRepository.create({
      bairro,tipo_local_id,tipo_cobranca_id,preco,logradouro,limite_pessoa,
      cep,limite_garagem,id_usuario,id_cidade,foto_local_id,espaco_m2,qtd_banheiro,
      descricao,qtd_quarto,titulo,numero,complemento,visualizacoes:0

       
    });

  

    return local;
  }
}

export default CreateLocalService;

